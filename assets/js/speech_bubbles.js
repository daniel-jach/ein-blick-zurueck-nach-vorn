<script>
new Vue({
    el: '#app',
  data: () => ({
    x: window.innerWidth/2-130/2,
    y: window.innerHeight/1.5-130/2,
    speaking: false,
    message:
      'Because I was considered a "party girl" I felt I deserved it. It was my fault for being there.',
    messageWords: "",
    currentWord: 0,
    messageTyped: "",
    typewiterPosition: 0,
    charsOnCurrentLine: 0,
    maxCharsOnLine: 24
  }),
  created() {
    setTimeout(this.speak, 1000);
  },
  methods: {
    speak() {
      this.speaking = true;
      this.messageWords = this.message.split(" ");
      this.typeWriter();
    },
    typeWriter() {
      if (this.typewiterPosition < this.message.length) {
        var charToWrite = this.message.charAt(this.typewiterPosition);
        this.messageTyped += charToWrite;
        this.typewiterPosition++;
        this.charsOnCurrentLine++;

        if (charToWrite == " ") {
          this.currentWord++;
          if (
            this.charsOnCurrentLine +
              this.messageWords[this.currentWord].length >=
            this.maxCharsOnLine
          ) {
            this.messageTyped += "\n";
            this.charsOnCurrentLine = 0;
          }
        }
        setTimeout(this.typeWriter, 70);
      }
    }
  }
})
</script>
