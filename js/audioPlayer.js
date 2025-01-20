document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".custom-audio-player")
  
    players.forEach((player) => {
      const audio = player.querySelector("audio")
      const playBtn = player.querySelector(".play-btn")
      const playIcon = player.querySelector(".play-icon")
      const pauseIcon = player.querySelector(".pause-icon")
      const progress = player.querySelector(".progress")
      const timeline = player.querySelector(".timeline")
      const currentTime = player.querySelector(".current")
      const duration = player.querySelector(".duration")
      const volumeSlider = player.querySelector(".volume-slider")
  
      function formatTime(time) {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
      }
  
      function togglePlayPause() {
        if (audio.paused) {
          audio.play()
          playIcon.style.display = "none"
          pauseIcon.style.display = "inline"
        } else {
          audio.pause()
          playIcon.style.display = "inline"
          pauseIcon.style.display = "none"
        }
      }
  
      audio.addEventListener("loadedmetadata", () => {
        duration.textContent = formatTime(audio.duration)
      })
  
      playBtn.addEventListener("click", togglePlayPause)
  
      audio.addEventListener("timeupdate", () => {
        const progressPercent = (audio.currentTime / audio.duration) * 100
        progress.style.width = `${progressPercent}%`
        currentTime.textContent = formatTime(audio.currentTime)
      })
  
      timeline.addEventListener("click", (e) => {
        const timelineWidth = timeline.clientWidth
        const clickPosition = e.offsetX
        const clickTime = (clickPosition / timelineWidth) * audio.duration
        audio.currentTime = clickTime
      })
  
      volumeSlider.addEventListener("input", (e) => {
        audio.volume = e.target.value
      })
  
      audio.addEventListener("ended", () => {
        playIcon.style.display = "inline"
        pauseIcon.style.display = "none"
        progress.style.width = "0%"
        currentTime.textContent = "0:00"
      })
    })
  })
  
  