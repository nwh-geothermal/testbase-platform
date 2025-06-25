'use client'

import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import {
  TrendingUp,
  Zap,
  Thermometer,
  Droplets,
  Gauge,
  Activity
} from 'lucide-react'

// 模拟数据
const energyData = [
  { month: '1月', output: 1200, efficiency: 89 },
  { month: '2月', output: 1350, efficiency: 91 },
  { month: '3月', output: 1480, efficiency: 97 },
  { month: '4月', output: 1520, efficiency: 93 },
  { month: '5月', output: 1680, efficiency: 95 },
  { month: '6月', output: 1750, efficiency: 96 }
]

const temperatureData = [
  { time: '00:00', input: 85, output: 45 },
  { time: '04:00', input: 87, output: 47 },
  { time: '08:00', input: 89, output: 49 },
  { time: '12:00', input: 92, output: 52 },
  { time: '16:00', input: 90, output: 50 },
  { time: '20:00', input: 88, output: 48 }
]

const systemStatusData = [
  { name: '正常运行', value: 85, color: '#00A86B' },
  { name: '预防维护', value: 12, color: '#FF6B35' },
  { name: '停机检修', value: 3, color: '#004E89' }
]

const metrics = [
  {
    icon: Zap,
    title: '取热功率',
    value: '2.5 MW',
    change: '+12%',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Thermometer,
    title: '地热温度',
    value: '89°C',
    change: '+2°C',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: Droplets,
    title: '流量',
    value: '150 L/s',
    change: '+5%',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Gauge,
    title: '系统效率',
    value: '96%',
    change: '+3%',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
]

export function DataDashboard() {
  return (
    <section id='operations' className='section-padding bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-geothermal-gray mb-6'>
            实时监控仪表板
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            基于物联网技术的实时数据采集与分析系统，
            为地热能开发利用提供科学决策支持
          </p>
        </motion.div>

        {/* 关键指标展示 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl p-6 shadow-lg'
            >
              <div className='flex items-center justify-between mb-4'>
                <div
                  className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center`}
                >
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <span className={`text-sm font-semibold ${metric.color}`}>
                  {metric.change}
                </span>
              </div>
              <h3 className='text-3xl font-bold text-geothermal-gray mb-1'>
                {metric.value}
              </h3>
              <p className='text-gray-600'>{metric.title}</p>
            </motion.div>
          ))}
        </div>

        {/* 图表展示 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* 能源产出趋势 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl p-6 shadow-lg'
          >
            <div className='flex items-center space-x-2 mb-6'>
              <TrendingUp className='w-6 h-6 text-geothermal-orange' />
              <h3 className='text-xl font-bold text-geothermal-gray'>
                能源产出趋势
              </h3>
            </div>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis
                  label={{
                    value: 'kW',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 5,
                    style: { textAnchor: 'middle', fill: '#888' }
                  }}
                />
                <Tooltip
                  formatter={(value, name) => [
                    name === '取热量'
                      ? `${value} kW`
                      : name === '系统效率'
                      ? `${value} %`
                      : value,
                    name
                  ]}
                />
                <Area
                  type='monotone'
                  dataKey='output'
                  name='取热量'
                  stroke='#FF6B35'
                  fill='#FF6B35'
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 温度监控 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl p-6 shadow-lg'
          >
            <div className='flex items-center space-x-2 mb-6'>
              <Thermometer className='w-6 h-6 text-geothermal-blue' />
              <h3 className='text-xl font-bold text-geothermal-gray'>
                温度监控
              </h3>
            </div>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='time' />
                <YAxis
                  label={{
                    value: '°C',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 5,
                    style: { textAnchor: 'middle', fill: '#888' }
                  }}
                />
                <Tooltip formatter={(value, name) => [`${value} °C`, name]} />
                <Line
                  type='monotone'
                  dataKey='input'
                  name='出水温度'
                  stroke='#004E89'
                  strokeWidth={3}
                />
                <Line
                  type='monotone'
                  dataKey='output'
                  name='回水温度'
                  stroke='#00A86B'
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* 系统状态和效率分析 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* 系统运行状态 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl p-6 shadow-lg'
          >
            <div className='flex items-center space-x-2 mb-6'>
              <Activity className='w-6 h-6 text-geothermal-green' />
              <h3 className='text-xl font-bold text-geothermal-gray'>
                系统运行状态
              </h3>
            </div>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={systemStatusData}
                  cx='50%'
                  cy='50%'
                  outerRadius={100}
                  dataKey='value'
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {systemStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 效率分析 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='bg-white rounded-2xl p-6 shadow-lg'
          >
            <div className='flex items-center space-x-2 mb-6'>
              <Gauge className='w-6 h-6 text-purple-600' />
              <h3 className='text-xl font-bold text-geothermal-gray'>
                系统效率分析
              </h3>
            </div>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis
                  label={{
                    value: '%',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 5,
                    style: { textAnchor: 'middle', fill: '#888' }
                  }}
                />
                <Tooltip formatter={(value, name) => [`${value} %`, name]} />
                <Bar
                  dataKey='efficiency'
                  name='系统效率'
                  fill='#6366f1'
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* 智能预警系统 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='mt-12 bg-gradient-to-r from-geothermal-orange to-geothermal-blue rounded-3xl p-8 text-white'
        >
          <h3 className='text-2xl font-bold mb-6 text-center'>智能预警系统</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white/20 rounded-xl p-4 text-center'>
              <div className='w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Activity className='w-8 h-8' />
              </div>
              <h4 className='font-semibold mb-2'>设备健康监测</h4>
              <p className='text-sm opacity-80'>
                实时监测设备运行状态，预测故障风险
              </p>
            </div>
            <div className='bg-white/20 rounded-xl p-4 text-center'>
              <div className='w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Zap className='w-8 h-8' />
              </div>
              <h4 className='font-semibold mb-2'>能效优化建议</h4>
              <p className='text-sm opacity-80'>基于AI算法提供系统优化建议</p>
            </div>
            <div className='bg-white/20 rounded-xl p-4 text-center'>
              <div className='w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Thermometer className='w-8 h-8' />
              </div>
              <h4 className='font-semibold mb-2'>环境适应调节</h4>
              <p className='text-sm opacity-80'>根据环境变化自动调节运行参数</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
