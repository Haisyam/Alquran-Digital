import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { FaHome } from 'react-icons/fa'
import Button from '../components/atoms/Button'
import SurahHeader from '../components/molecules/SurahHeader'
import AudioPlayer from '../components/molecules/AudioPlayer'
import AyahCard from '../components/molecules/AyahCard'

function SurahDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [surah, setSurah] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedQori, setSelectedQori] = useState('01')
  const [isPlaying, setIsPlaying] = useState(false)
  const [playingAyah, setPlayingAyah] = useState(null)
  const audioRef = useRef(new Audio())

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(`https://equran.id/api/v2/surat/${id}`)
        setSurah(response.data.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching surah:', error)
        setLoading(false)
      }
    }

    fetchSurah()
    return () => {
      audioRef.current.pause()
    }
  }, [id])

  const handleQoriChange = (event) => {
    setSelectedQori(event.target.value)
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
    setPlayingAyah(null)
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.src = surah.audioFull[selectedQori]
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
    setPlayingAyah(null)
  }

  const playAyah = (ayah) => {
    if (playingAyah === ayah.nomorAyat) {
      audioRef.current.pause()
      setPlayingAyah(null)
    } else {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
      audioRef.current.src = ayah.audio[selectedQori]
      audioRef.current.play()
      setPlayingAyah(ayah.nomorAyat)

      audioRef.current.onended = () => {
        setPlayingAyah(null)
      }
    }
  }

  const navigateToSurah = (surahNumber) => {
    if (surahNumber > 0 && surahNumber <= 114) {
      navigate(`/surah/${surahNumber}`)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!surah) return null

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-6">
        <Button icon={<FaHome />}>Back to Home</Button>
      </Link>

      <SurahHeader
        surah={surah}
        onNavigate={navigateToSurah}
        currentId={id}
      />

      <AudioPlayer
        selectedQori={selectedQori}
        onQoriChange={handleQoriChange}
        isPlaying={isPlaying}
        onPlayToggle={togglePlay}
      />

      <div className="space-y-6">
        {surah.ayat.map((ayat) => (
          <AyahCard
            key={ayat.nomorAyat}
            ayah={ayat}
            isPlaying={playingAyah === ayat.nomorAyat}
            onPlay={playAyah}
          />
        ))}
      </div>
    </div>
  )
}

export default SurahDetail