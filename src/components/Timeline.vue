<template>
  <div class="timeline">
    <div class="user">
      <img
        :src="shipper.profilePicture"
        width="128"
        height="128"
        alt="User Profile Picture"
      />
      <span>{{ shipper.username }}</span>
    </div>
    <div class="text">
      <h3>{{ title }}</h3>
      <p ref="clipboard">{{ body }}</p>
    </div>
    <div class="clipboard">
      <button @click="CopyToClipboard">
        <ClipboardPositive key="clipped" v-if="isCopied" />
        <ClipboardNegative key="clip" v-else />
        <span>{{ isCopied ? "Kopyalandı" : "Kopyala" }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  import ClipboardPositive from "@/assets/ClipboardPositive.svg";
  import ClipboardNegative from "@/assets/ClipboardNegative.svg";

  export default Vue.extend({
    name: "Timeline",
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      body: {
        type: String,
        required: true,
        default: ""
      },
      shipper: {
        type: Object,
        required: true,
        default: {
          username: "",
          profilePicture: ""
        }
      }
    },
    components: {
      ClipboardPositive,
      ClipboardNegative
    },
    data() {
      return {
        isCopied: false
      };
    },
    methods: {
      async CopyToClipboard(): Promise<void> {
        if (!this.isCopied) this.isCopied = true;

        const clippedText = (this.$refs.clipboard as HTMLElement).innerText;
        await navigator.clipboard.writeText(clippedText);

        if (this.isCopied)
          setTimeout(async () => {
            this.isCopied = false;
          }, 1500);
      }
    }
  });
</script>

<style lang="scss" scoped>
  .timeline {
    @include flex(row);

    height: auto;
    width: auto;
    padding: 30px;

    background: #321f28;
    border-radius: 100px;

    .user {
      @include flex(column);

      width: 192px;
      height: 192px;
      margin: 30px;

      span {
        text-align: center;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        color: #ffc276;
      }

      img {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        margin-bottom: 30px;
      }
    }

    .text {
      margin-left: 30px;
      margin-right: 30px;

      h3 {
        text-align: center;
        font-size: 1.8rem;
        color: #a05344;
      }
      p {
        text-align: justify;
        text-align-last: left;
        font-size: 1.2rem;
        color: #f3eac2;
      }
    }

    .clipboard {
      @include flex(column);
      margin: 30px;

      button {
        background: transparent;
        cursor: pointer;
      }
    }
  }
</style>
