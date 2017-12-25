<template>
  <div class="typography">
    <card>
      <div slot="header" class="card-title">
        Light Bootstrap Table Heading
        <p class="card-category">Created using Roboto Font Family</p>
      </div>
      <div slot="body">
        <div class="typo-line" v-for="i in 6" :key="i">
          <component :is="`h${i}`">
            <span class="category">
              Header {{ i }}
            </span>
            Light Bootstrap Table Heading
          </component>
        </div>
        <div class="typo-line">
          <p>
            <span class="category">
              Paragraph
            </span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
        <div class="typo-line">
          <span class="category">
              Muted Text
          </span>
          <p class="muted">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
          </p>
        </div>
        <div class="typo-line">
          <span class="category">
            Coloured Text
          </span>
          <p :class="color" :key="index" v-for="(color, index) in ['primary', 'info', 'warn', 'error']">
            Text {{ color }} - Light Bootstrap Table Heading and complex bootstrap dashboard you've ever seen on the internet.
          </p>
        </div>
        <div class="typo-line">
          <span class="category">
            Small Tag
          </span>
          <h2>
            Header with small subtitle 
            <br />
            <small>
              ".small" is a tag for the headers
            </small>
          </h2>
        </div>
        <div class="typo-line">
          <blockquote>
            <span class="category">
              Quote
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
            </p>
            <small>
              Steve Jobs, CEO Apple
            </small>
          </blockquote>
        </div>
      </div>
    </card>
  </div>
</template>

<style lang="scss">
  .typography {
    .typo-line {
      padding-left: 120px;
      margin-bottom: 45px;
      position: relative;
    }
    .category {
      position: absolute;
      left: 0; 
      font-size: 16px;
      transform: translateY(-50%);
      top: 50%;
      font-weight: 300;
    }
  }
</style>
