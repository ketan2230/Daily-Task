<template>
  <div>
    <h3>binding</h3>
    <h2>{{ name }}</h2>
    <h2 v-text="text"></h2>
    <hr />

    <h3>id bind</h3>
    <h2 v-bind:id="headingId">Bind Id</h2>
    <hr />

    <h3>class bind</h3>
    <h2 :class="isDisabled && 'italic'">Bind Class</h2>
    <h2 :class="[isDisabled && 'italic', 'grn']">Array Bind Class</h2>
    <h2
      :class="{
        italic: isDisabled,
        grn: !isDisabled,
      }"
    >
      Object Bind Class
    </h2>
    <hr />

    <h3>style bind</h3>
    <h2
      :style="{
        color: highlightColor,
        fontSize: headerSize + 'px',
      }"
    >
      Style Bind
    </h2>
    <h2 :style="objectStyle">Object Style Bind</h2>
    <h2 :style="[objectStyle, bold]">Array Style Bind</h2>
    <hr />

    <h3>disabled</h3>
    <button :disabled="isDisabled">Disabled</button>
    <hr />

    <h3>conditions</h3>
    <h2 v-if="num === 0">Num is Zero</h2>
    <h2 v-else-if="num < 0">Num is Negative</h2>
    <h2 v-else-if="num > 0">Num is Positive</h2>
    <h2 v-else>Num is Num</h2>

    <template v-if="num === 0">
      <h2>Amar</h2>
      <h2>Akabar</h2>
      <h2>Anthany</h2>
    </template>

    <h2 v-show="num === 0">Using v-show</h2>
    <h2 v-if="num === 0">Using v-if</h2>
    <hr />

    <h3>loop</h3>
    <li v-for="name in nm" :key="name">{{ name }}</li>
    <li v-for="name in fullName" :key="name.first">
      {{ name.first }} {{ name.last }}
    </li>
    <div v-for="name in actor" :key="name.id">
      <h2>{{ name.name }}</h2>
      <li v-for="movie in name.movies" :key="movie">{{ movie }}</li>
    </div>
    <h3 v-for="(value, key, index) in info" :key="index">
      {{ index }} {{ key }} {{ value }}
    </h3>
    <hr />

    <h3>add students</h3>
    <template>
      <h1><input type="text" v-model="student" /></h1>
      <button @click="add">Add Student</button>
      <li v-for="name in students" :key="name.index">{{ name }}</li>
    </template>

    <h3>click event</h3>
    <h2>{{ count }}</h2>
    <button @click="increment">Increment Count</button>
    <hr />

    <h3>v-once v-pre</h3>
    <h1 v-once>{{ on }}</h1>
    <h1 v-pre>{{ pre }}</h1>
    <button @click="on = 'v-once'">Click</button>
    <hr />

    <h3>computed property vs method</h3>
    <h1>{{ callMethod() }}</h1>
    <h1>{{ callComputed }}</h1>
    <hr />

    <h3>getters & setters</h3>
    <h1>{{ fullNm }}</h1>
    <button @click="changeName">Change Name</button>
    <hr />

    <h3>Volume Tracker</h3>
    <h2>Current Volume - {{ volume }}</h2>
    <button @click="volume = volume + 2">Increment</button>
    <button @click="volume = volume - 2">Decrement</button>

    <h3>raw html</h3>
    <h2 v-html="html"></h2>
    <hr />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      volume: 0,
      name: "Interpolation",
      text: "V-text",
      headingId: "heading",
      isDisabled: true,
      html: "<b>HTML Binding</b>",
      highlightColor: "yellow",
      headerSize: "26",
      objectStyle: {
        color: "yellow",
        fontSize: "26px",
      },
      bold: {
        fontWeight: "bold",
      },
      num: 0,
      nm: ["Helo", "Mini"],
      fullName: [
        { first: "Hello", last: "Mini" },
        { first: "Hii", last: "World" },
      ],
      actor: [
        { name: "Kartik", movies: ["Abc", "def"] },
        { name: "Hritik", movies: ["War", "Dhoom3"] },
      ],
      info: {
        name: "Abcd",
        age: 20,
      },
      count: 0,
      student: "",
      students: [],
      on: "V-once",
      pre: "v-pre",
      a: "Virat",
      b: "Kohli",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    add() {
      this.students.push(this.student);
    },
    callMethod() {
      console.log("Method Call");
    },
    changeName() {
      this.fullNm = "MS Dhoni";
    },
  },
  computed: {
    callComputed() {
      console.log("Computed Property Call");
      return true;
    },
    // getter & setters
    fullNm: {
      get() {
        return `${this.a} ${this.b}`;
      },
      set(value) {
        const name = value.split(" ");
        this.a = name[0];
        this.b = name[1];
      },
    }},
    watch:{
      volume( newValue, oldValue){
        if( newValue > oldValue &&  newValue === 16){
          alert('Damage your ear')
        }
    },
  },
};
</script>

<style>
h2,
button {
  margin-bottom: 30px;
}
.italic {
  font-style: italic;
}
.grn {
  color: green;
}
</style>