const episodes = {
  1: {
    1: "https://www.youtube.com/embed/qZnyKGVOKOc",
    2: "https://www.youtube.com/embed/VIDEO_ID_2",
    3: "https://www.youtube.com/embed/VIDEO_ID_3"
    // Добавьте дополнительные серии по мере необходимости
  },
  2: {
    1: "https://www.youtube.com/embed/VIDEO_ID_4",
    2: "https://www.youtube.com/embed/VIDEO_ID_5"
    // Добавьте дополнительные серии по мере необходимости
  }
};

function loadEpisodes() {
  const seasonSelect = document.getElementById("season");
  const episodeSelect = document.getElementById("episode");
  const selectedSeason = seasonSelect.value;

  // Очистить предыдущие опции
  episodeSelect.innerHTML = "";

  // Загрузить новые серии
  const seasonEpisodes = episodes[selectedSeason];
  for (const episode in seasonEpisodes) {
    const option = document.createElement("option");
    option.value = episode;
    option.text = `Серия ${episode}`;
    episodeSelect.appendChild(option);
  }

  // Загрузить первую серию по умолчанию
  changeEpisode();
}

function changeEpisode() {
  const seasonSelect = document.getElementById("season");
  const episodeSelect = document.getElementById("episode");
  const player = document.getElementById("anime-player");

  const selectedSeason = seasonSelect.value;
  const selectedEpisode = episodeSelect.value;

  const videoUrl = episodes[selectedSeason][selectedEpisode];
  player.src = videoUrl;
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", loadEpisodes);
