<template>
  <div>
    <div class='container-fluid'>
      <div class='row'>
        <div class='col-md-12'>
          <card>
            <div slot='header' class='card-title'>
              400+ Awesome Icons
              <p class='card-category'>
                Prower by
                <a href='http://fontawesome.io/'>Font Awesome</a>
              </p>
            </div>
            <div slot='body'>
              <div class='row'>
                <div class='col-lg-2 col-md-3 col-sm-4 col-6' :key='index' v-for='(icon, index) in icons'>
                  <div class="icons-container">
                    <i class='icon fa' :class="'fa-' + icon"></i>
                    <p>{{ icon }}</p>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      icons: [
        'address-book-o',
        'address-card-o',
        'bell-o',
        'bell-slash-o',
        'bookmark-o',
        'building-o',
        'calendar-check-o',
        'calendar-minus-o',
        'calendar-o',
        'calendar-plus-o',
        'calendar-times-o',
        'camera-retro',
        'check-circle-o',
        'check-square-o',
        'circle-o',
        'clock-o',
        'comment-o',
        'commenting-o',
        'comments-o',
        'dot-circle-o',
        'envelope-o',
        'envelope-open-o',
        'file-archive-o',
        'file-audio-o',
        'file-code-o',
        'file-excel-o',
        'file-image-o',
        'file-pdf-o',
        'file-powerpoint-o',
        'file-video-o',
        'file-word-o',
        'flag-o',
        'folder-o',
        'folder-open-o',
        'frown-o',
        'futbol-o',
        'hand-lizard-o',
        'hand-paper-o',
        'hand-peace-o',
        'hand-pointer-o',
        'hand-rock-o',
        'hand-scissors-o',
        'hand-spock-o',
        'handshake-o',
        'hdd-o',
        'heart-o',
        'hourglass-o',
        'id-card-o',
        'info',
        'keyboard-o',
        'lemon-o',
        'lightbulb-o',
        'map-o',
        'meh-o',
        'minus-square-o',
        'moon-o',
        'newspaper-o',
        'paper-plane-o',
        'pencil-square-o',
        'picture-o',
        'plus-square-o',
        'question-circle-o',
        'share-square-o',
        'smile-o',
        'snowflake-o',
        'square-o',
        'star-half-o',
        'star-o',
        'sticky-note-o',
        'sun-o',
        'times-circle-o',
        'trash-o',
        'user-circle-o',
        'user-o',
        'window-close-o',
        'genderless',
        'intersex (alias)',
        'mars',
        'mars-double',
        'mars-stroke',
        'mars-stroke-h',
        'mars-stroke-v',
        'mercury',
        'neuter',
        'transgender',
        'transgender-alt',
        'venus',
        'venus-double',
        'venus-mars',
        'file-archive-o',
        'file-audio-o',
        'file-code-o',
        'file-excel-o',
        'file-image-o',
        'file-movie-o (alias)',
        'file-o',
        'file-pdf-o',
        'file-photo-o (alias)',
        'file-picture-o (alias)',
        'file-powerpoint-o',
        'file-sound-o (alias)',
        'file-text-o',
        'file-video-o',
        'file-word-o',
        'file-zip-o (alias)'
      ]
    }
  }
}
</script>
