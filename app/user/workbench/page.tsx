'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Building2,
  Upload,
  Sparkles,
  ShieldCheck,
  Globe2,
  Video,
  Image as ImageIcon,
  FileText,
  X,
  Save,
  Loader2,
  Phone,
  Mail,
  MapPin,
  Network
} from 'lucide-react'
import { useAuthContext } from '@/components/auth-provider'
import { supabase } from '@/lib/supabase'
import { getAssetPath } from '@/lib/utils'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ImageStrip } from '@/components/image-strip'

type MediaAsset = {
  name: string
  url: string
  type: 'image' | 'video' | 'pdf'
  uploaded_at: string
}

type CompanyProfile = {
  id?: string
  company_name: string
  company_type?: string
  business_scope?: string
  main_products?: string
  technical_capabilities?: string
  website?: string
  address?: string
  contact_person?: string
  phone?: string
  email?: string
  expectations?: string
  notes?: string
  publicity_assets?: MediaAsset[]
  status?: string
  updated_at?: string
}

const publicityBucket = 'company-publicity'

export default function WorkbenchPage() {
  const router = useRouter()
  const { user, loading } = useAuthContext()
  const [profile, setProfile] = useState<CompanyProfile>({
    company_name: '',
    company_type: '',
    business_scope: '',
    main_products: '',
    technical_capabilities: '',
    website: '',
    address: '',
    contact_person: '',
    phone: '',
    email: '',
    expectations: '',
    notes: '',
    publicity_assets: []
  })
  const [loadingProfile, setLoadingProfile] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadHint, setUploadHint] = useState('')
  const [deletingAsset, setDeletingAsset] = useState<string | null>(null)
  const profileFetched = useRef(false)

  const profileCompleteness = useMemo(() => {
    const fields = [
      profile.company_name,
      profile.company_type,
      profile.business_scope,
      profile.main_products,
      profile.technical_capabilities,
      profile.contact_person,
      profile.phone,
      profile.email
    ]
    const completed = fields.filter(Boolean).length
    return Math.round((completed / fields.length) * 100)
  }, [profile])

  useEffect(() => {
    if (loading) return
    if (!user) {
      router.push('/login')
      return
    }
    if (profileFetched.current) return
    profileFetched.current = true
    fetchProfile()
  }, [loading, user, router])

  const fetchProfile = async () => {
    if (!user) return
    setLoadingProfile(true)
    try {
      const { data, error } = await supabase
        .from('company')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (error) {
        console.error('Error loading company profile', error)
        toast.error('未能获取企业资料，请稍后再试')
        return
      }

      if (data) {
        const publicity_assets =
          (data.publicity_assets as MediaAsset[] | null) || []
        setProfile({
          id: data.id,
          company_name: data.company_name || '',
          company_type: data.company_type || '',
          business_scope: data.business_scope || '',
          main_products: data.main_products || '',
          technical_capabilities: data.technical_capabilities || '',
          website: data.website || '',
          address: data.address || '',
          contact_person: data.contact_person || '',
          phone: data.phone || '',
          email: data.email || data.auth_email || '',
          expectations: data.expectations || '',
          notes: data.notes || '',
          publicity_assets,
          status: data.status || 'pending',
          updated_at: data.updated_at
        })
      }
    } catch (err) {
      console.error('Unexpected error loading profile', err)
      toast.error('加载企业信息时出现问题')
    } finally {
      setLoadingProfile(false)
    }
  }

  const handleSave = async () => {
    if (!profile.id) {
      toast.error('尚未找到企业档案，无法保存')
      return
    }
    setSaving(true)

    try {
      const { error } = await supabase
        .from('company')
        .update({
          company_name: profile.company_name,
          company_type: profile.company_type,
          business_scope: profile.business_scope,
          main_products: profile.main_products,
          technical_capabilities: profile.technical_capabilities,
          website: profile.website,
          address: profile.address,
          contact_person: profile.contact_person,
          phone: profile.phone,
          email: profile.email,
          expectations: profile.expectations,
          notes: profile.notes,
          publicity_assets: profile.publicity_assets
        })
        .eq('id', profile.id)

      if (error) {
        console.error('Error saving profile', error)
        toast.error('保存失败，请稍后再试')
      } else {
        toast.success('企业信息已更新')
      }
    } catch (err) {
      console.error('Unexpected error saving profile', err)
      toast.error('保存过程中出现问题')
    } finally {
      setSaving(false)
    }
  }

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files || !profile.id || !user) return
    const files = Array.from(event.target.files)
    if (files.length === 0) return

    setUploading(true)
    setUploadHint('正在上传素材到云端...')

    try {
      const uploaded: MediaAsset[] = []
      for (const file of files) {
        const extension = file.name.split('.').pop()
        const path = `${user.id}/${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.${extension}`

        const { error: uploadError } = await supabase.storage
          .from(publicityBucket)
          .upload(path, file, {
            cacheControl: '3600',
            upsert: false,
            contentType: file.type
          })

        if (uploadError) {
          console.error('Upload failed', uploadError)
          throw uploadError
        }

        const { data } = supabase.storage
          .from(publicityBucket)
          .getPublicUrl(path)

        const assetType = file.type.startsWith('video')
          ? 'video'
          : file.type === 'application/pdf'
          ? 'pdf'
          : 'image'

        uploaded.push({
          name: file.name,
          url: data.publicUrl,
          type: assetType,
          uploaded_at: new Date().toISOString()
        })
      }

      const updatedAssets = [...(profile.publicity_assets || []), ...uploaded]
      setProfile((prev) => ({ ...prev, publicity_assets: updatedAssets }))
      setUploadHint('素材上传成功，正在保存到企业档案...')

      const { error: attachError } = await supabase
        .from('company')
        .update({ publicity_assets: updatedAssets })
        .eq('id', profile.id)

      if (attachError) {
        console.error('Failed to attach media to profile', attachError)
        toast.warning('素材已上传，但保存到企业档案时出错，请稍后重试')
      } else {
        toast.success('素材已上传并保存，欢迎用于宣传')
      }
    } catch (err) {
      console.error('Upload error', err)
      toast.error('素材上传失败，请检查网络或存储配置')
    } finally {
      setUploading(false)
      setUploadHint('')
      event.target.value = ''
    }
  }

  const handleDeleteAsset = async (asset: MediaAsset) => {
    if (!profile.id) return
    setDeletingAsset(asset.url)
    try {
      const remaining = (profile.publicity_assets || []).filter(
        (item) =>
          !(item.url === asset.url && item.uploaded_at === asset.uploaded_at)
      )

      const { error } = await supabase
        .from('company')
        .update({ publicity_assets: remaining })
        .eq('id', profile.id)

      if (error) {
        console.error('Failed to delete asset from profile', error)
        toast.error('删除失败，请稍后再试')
      } else {
        setProfile((prev) => ({ ...prev, publicity_assets: remaining }))
        toast.success('素材已删除')
      }
    } catch (err) {
      console.error('Unexpected delete error', err)
      toast.error('删除过程中出现问题')
    } finally {
      setDeletingAsset(null)
    }
  }

  if (loading || loadingProfile) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-12 h-12 rounded-full border-4 border-orange-400 border-t-transparent animate-spin' />
          <p className='text-gray-600'>加载工作台...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,159,64,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.18),transparent_30%)]' />
        <div className='max-w-[90rem] mx-auto px-3 sm:px-4 lg:px-6 pt-20 pb-12 relative'>
          <div className='grid md:grid-cols-2 gap-4 mb-8'>
            <Card className='shadow-sm border-none bg-white/80 backdrop-blur col-span-1'>
              <CardHeader className='pb-2'>
                <CardTitle className='flex items-center space-x-2 text-lg'>
                  <Building2 className='w-5 h-5 text-orange-500' />
                  <div>企业概览</div>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2 text-sm text-gray-700'>
                <div className='font-semibold text-gray-900'>
                  {profile.company_name || '未填写企业名称'}
                </div>
                <div className='flex items-center space-x-2 text-gray-600'>
                  <Network className='w-4 h-4' />
                  <div>{profile.company_type || '类型未设置'}</div>
                </div>
                <div className='flex items-center space-x-2 text-gray-600'>
                  <Globe2 className='w-4 h-4' />
                  <div>{profile.website || '官网未填写'}</div>
                </div>
              </CardContent>
            </Card>

            <Card className='shadow-sm border-none bg-white/80 backdrop-blur col-span-1'>
              <CardHeader className='pb-2'>
                <CardTitle className='flex items-center space-x-2 text-lg'>
                  <ShieldCheck className='w-5 h-5 text-green-500' />
                  <div>联系人</div>
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-2 text-sm text-gray-700'>
                <div className='font-semibold text-gray-900'>
                  {profile.contact_person || '联系人未填写'}
                </div>
                <div className='flex items-center space-x-2 text-gray-600'>
                  <Phone className='w-4 h-4' />
                  <div>{profile.phone || '电话未填写'}</div>
                </div>
                <div className='flex items-center space-x-2 text-gray-600'>
                  <Mail className='w-4 h-4' />
                  <div>{profile.email || '邮箱未填写'}</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <ImageStrip
            images={[
              getAssetPath('/meeting1.jpg'),
              getAssetPath('/lab1.jpg'),
              getAssetPath('/engine1.jpg')
            ]}
            className='pb-10'
          />

          <div className='grid lg:grid-cols-3 gap-6 pb-16'>
            <div className='lg:col-span-2 space-y-6'>
              <Card className='shadow-sm'>
                <CardHeader>
                  <CardTitle>企业资料</CardTitle>
                </CardHeader>
                <CardContent className='space-y-5'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='company_name'>企业名称 *</Label>
                      <Input
                        id='company_name'
                        value={profile.company_name}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            company_name: e.target.value
                          }))
                        }
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='company_type'>企业类型</Label>
                      <Input
                        id='company_type'
                        value={profile.company_type || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            company_type: e.target.value
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='business_scope'>业务范围</Label>
                      <Textarea
                        id='business_scope'
                        value={profile.business_scope || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            business_scope: e.target.value
                          }))
                        }
                        rows={3}
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='main_products'>核心产品 / 项目</Label>
                      <Textarea
                        id='main_products'
                        value={profile.main_products || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            main_products: e.target.value
                          }))
                        }
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='technical_capabilities'>技术能力</Label>
                    <Textarea
                      id='technical_capabilities'
                      value={profile.technical_capabilities || ''}
                      onChange={(e) =>
                        setProfile((prev) => ({
                          ...prev,
                          technical_capabilities: e.target.value
                        }))
                      }
                      placeholder='团队资质、核心技术、专利等'
                      rows={3}
                    />
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='website'>企业官网</Label>
                      <Input
                        id='website'
                        value={profile.website || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            website: e.target.value
                          }))
                        }
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='address'>办公地址</Label>
                      <div className='flex items-center space-x-2'>
                        <Input
                          id='address'
                          value={profile.address || ''}
                          onChange={(e) =>
                            setProfile((prev) => ({
                              ...prev,
                              address: e.target.value
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='contact_person'>联系人</Label>
                      <Input
                        id='contact_person'
                        value={profile.contact_person || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            contact_person: e.target.value
                          }))
                        }
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='phone'>联系电话</Label>
                      <Input
                        id='phone'
                        value={profile.phone || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            phone: e.target.value
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='email'>邮箱</Label>
                      <Input
                        id='email'
                        type='email'
                        value={profile.email || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            email: e.target.value
                          }))
                        }
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='expectations'>合作意向</Label>
                      <Input
                        id='expectations'
                        value={profile.expectations || ''}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            expectations: e.target.value
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='notes'>备注</Label>
                    <Textarea
                      id='notes'
                      value={profile.notes || ''}
                      onChange={(e) =>
                        setProfile((prev) => ({
                          ...prev,
                          notes: e.target.value
                        }))
                      }
                      rows={3}
                    />
                  </div>

                  <div className='flex justify-end'>
                    <Button
                      onClick={handleSave}
                      disabled={saving}
                      className='inline-flex items-center space-x-2'
                    >
                      {saving ? (
                        <Loader2 className='w-4 h-4 animate-spin' />
                      ) : (
                        <Save className='w-4 h-4' />
                      )}
                      <div>{saving ? '保存中...' : '保存资料'}</div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className='space-y-6'>
              <Card className='shadow-sm h-full'>
                <CardHeader>
                  <div className='flex items-start justify-between'>
                    <div>
                      <CardTitle className='flex items-center space-x-2'>
                        <Sparkles className='w-5 h-5 text-sky-500' />
                        <div>宣传素材</div>
                      </CardTitle>
                      <CardDescription className='mt-1'>
                        已上传 {profile.publicity_assets?.length || 0} 个文件
                      </CardDescription>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Badge
                        variant='secondary'
                        className='bg-orange-100 text-orange-800'
                      >
                        图片
                      </Badge>
                      <Badge
                        variant='secondary'
                        className='bg-blue-100 text-blue-800'
                      >
                        视频
                      </Badge>
                      <Badge
                        variant='secondary'
                        className='bg-gray-100 text-gray-800'
                      >
                        PDF
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='border-2 border-dashed border-orange-200 rounded-xl p-4 bg-orange-50/50'>
                    <div className='flex items-center space-x-3 mb-3'>
                      <div className='h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center'>
                        <Upload className='w-5 h-5 text-orange-600' />
                      </div>
                      <div>
                        <p className='font-medium text-gray-900'>
                          拖拽或选择文件上传
                        </p>
                        <p className='text-sm text-gray-600'>
                          支持图片与视频，单个文件不超过 200MB
                        </p>
                      </div>
                    </div>
                    <Input
                      type='file'
                      multiple
                      accept='image/*,video/*,.pdf,application/pdf'
                      onChange={handleFileUpload}
                      disabled={uploading}
                    />
                    {uploadHint && (
                      <p className='text-sm text-orange-700 mt-2'>
                        {uploadHint}
                      </p>
                    )}
                  </div>

                  <div className='grid grid-cols-2 gap-3'>
                    {(profile.publicity_assets || []).map((asset) => (
                      <div
                        key={`${asset.url}-${asset.uploaded_at}`}
                        className='relative overflow-hidden rounded-lg border bg-white shadow-sm group'
                      >
                        <button
                          type='button'
                          onClick={() => handleDeleteAsset(asset)}
                          disabled={deletingAsset === asset.url}
                          className='absolute top-2 right-2 z-10 rounded-full bg-white/90 shadow text-gray-600 hover:text-red-600 hover:bg-white transition disabled:opacity-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto w-5 h-5 flex items-center justify-center'
                          aria-label='删除素材'
                        >
                          <X className='w-3 h-3' />
                        </button>
                        <div className='absolute top-2 left-2'>
                          <Badge
                            variant='secondary'
                            className={
                              asset.type === 'video'
                                ? 'bg-blue-100 text-blue-800'
                                : asset.type === 'pdf'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-orange-100 text-orange-800'
                            }
                          >
                            {asset.type === 'video' ? (
                              <Video className='w-3 h-3 mr-1' />
                            ) : asset.type === 'pdf' ? (
                              <FileText className='w-3 h-3 mr-1' />
                            ) : (
                              <ImageIcon className='w-3 h-3 mr-1' />
                            )}
                            {asset.type === 'video'
                              ? '视频'
                              : asset.type === 'pdf'
                              ? 'PDF'
                              : '图片'}
                          </Badge>
                        </div>
                        {asset.type === 'video' ? (
                          <video
                            controls
                            className='w-full h-32 object-cover bg-black/5'
                            src={asset.url}
                          />
                        ) : asset.type === 'pdf' ? (
                          <div className='w-full h-32 bg-gray-50 flex flex-col items-center justify-center text-gray-700'>
                            <FileText className='w-8 h-8 mb-2' />
                            <div className='text-xs line-clamp-2 px-3 text-center'>
                              {asset.name}
                            </div>
                          </div>
                        ) : (
                          <img
                            src={asset.url}
                            alt={asset.name}
                            className='w-full h-32 object-cover'
                            loading='lazy'
                          />
                        )}
                        {asset.type !== 'pdf' && (
                          <div className='px-3 py-2 text-xs text-gray-700 line-clamp-2 bg-white'>
                            {asset.name}
                          </div>
                        )}
                      </div>
                    ))}
                    {profile.publicity_assets?.length === 0 && (
                      <p className='col-span-2 text-sm text-gray-500'>
                        暂无素材，上传后可在此预览。
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
