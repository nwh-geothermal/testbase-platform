'use client'

import { useEffect, useRef } from 'react'

type LeafletMapProps = {
  center: [number, number]
  marker?: [number, number]
  markerLabel?: string
  zoom?: number
  className?: string
}

export function LeafletMap({
  center,
  marker,
  markerLabel,
  zoom = 14,
  className
}: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<import('leaflet').Map | null>(null)
  const markerRef = useRef<import('leaflet').Marker | null>(null)
  const markerColor = '#f97316'

  useEffect(() => {
    let isActive = true

    const initMap = async () => {
      if (!containerRef.current || mapRef.current) {
        return
      }

      const { default: L } = await import('leaflet')
      if (!isActive || !containerRef.current) {
        return
      }

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30">
          <path d="M11 0C5.72 0 1.4 4.32 1.4 9.6c0 7.2 9.6 20.4 9.6 20.4s9.6-13.2 9.6-20.4C20.6 4.32 16.28 0 11 0z" fill="${markerColor}"/>
          <circle cx="11" cy="9.5" r="3.8" fill="#ffffff"/>
        </svg>
      `
      const svgUrl = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
      const defaultIcon = L.icon({
        iconUrl: svgUrl,
        iconSize: [22, 30],
        iconAnchor: [11, 30],
        popupAnchor: [0, -26]
      })

      L.Marker.prototype.options.icon = defaultIcon

      const map = L.map(containerRef.current).setView(center, zoom)
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map)

      if (marker) {
        markerRef.current = L.marker(marker).addTo(map)
        if (markerLabel) {
          markerRef.current.bindPopup(markerLabel)
        }
      }
    }

    initMap()

    return () => {
      isActive = false
      if (mapRef.current) {
        const container = mapRef.current.getContainer()
        mapRef.current.remove()
        if (container && '_leaflet_id' in container) {
          delete (container as { _leaflet_id?: number })._leaflet_id
        }
        mapRef.current = null
      }
      markerRef.current = null
    }
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) {
      return
    }

    map.setView(center, zoom)

    if (marker) {
      if (!markerRef.current) {
        import('leaflet').then(({ default: L }) => {
          if (!mapRef.current) {
            return
          }
          markerRef.current = L.marker(marker).addTo(mapRef.current)
          if (markerLabel) {
            markerRef.current.bindPopup(markerLabel)
          }
        })
      } else {
        markerRef.current.setLatLng(marker)
        if (markerLabel) {
          markerRef.current.bindPopup(markerLabel)
        } else {
          markerRef.current.unbindPopup()
        }
      }
    } else if (markerRef.current) {
      markerRef.current.remove()
      markerRef.current = null
    }
  }, [center, marker, markerLabel, zoom])

  return <div ref={containerRef} className={className} />
}
