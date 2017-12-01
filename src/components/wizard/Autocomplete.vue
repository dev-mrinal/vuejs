<template>
    <div style="position:relative" v-bind:class="{'open':openSuggestion}">
        <input class="form-control" type="text" :value="value" @input="updateValue($event.target.value)"
          @keydown.enter = 'enter'
          @keydown.down = 'down'
          @keydown.up = 'up'
        >
        <ul class="dropdown-menu" style="width:100%" v-bind:style="{ 'display': setdisplay }">
            <li v-for="(suggestion, index) in matches"
                v-bind:class="{'active': isActive(index)}"
                @click="suggestionClick(index)"
            >
              <a href="javascript:void(0)">{{ suggestion.RetailerItemCode }} <small>{{ suggestion.barcode }}</small> {{ suggestion.productname }}
              </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  props: {
    value: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      open: false,
      current: 0,
      setdisplay: ''
    }
  },
  computed: {
    // Filtering the suggestion based on the input
    matches () {
      console.log('serach')
      return this.suggestions.filter((obj) => {
        return obj.RetailerItemCode.indexOf(this.value) >= 0
      })
    },
    openSuggestion () {
      return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true
    }
  },
  methods: {
    updateValue (value) {
      console.log(value)
      if (this.open === false) {
        this.setdisplay = 'block'
        this.open = true
        this.current = 0
      }
      this.$emit('input', value)
    },
    // When enter pressed on the input
    enter: function () {
      console.log('....................')
      this.setdisplay = 'block'
      console.log(this.setdisplay)
      this.$emit('input', this.matches[this.current].RetailerItemCode)
      this.open = false
    },
    // When up pressed while suggestions are open
    up: function () {
      if (this.current > 0) {
        this.current--
      }
    },
    // When up pressed while suggestions are open
    down: function () {
      if (this.current < this.matches.length - 1) {
        this.current++
      }
    },
    // For highlighting element
    isActive: function (index) {
      return index === this.current
    },
    // When one of the suggestion is clicked
    suggestionClick: function (index) {
      this.setdisplay = 'none'
      this.$emit('input', this.matches[index].RetailerItemCode)
      this.open = false
    }
  }
}
</script>


<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>