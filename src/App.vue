<script setup>
import { ref, watch } from "vue";
///////////////////////////////////
const bookForm = ref(null);

const bookTitle = ref("");
const bookCover = ref("");
const bookAuthor = ref("");

const books = ref(JSON.parse(localStorage.getItem("books")) || []); // list for storing the books locally

const openForm = () => {
  // to open a pop up when you click the + button
  bookForm.value.showModal();
};

const saveBook = () => {
  books.value.push({
    id: Date.now(),
    title: bookTitle.value,
    cover: bookCover.value,
    author: bookAuthor.value,
  });
  bookTitle.value = ""; // to reset the fields and close when submitting a book
  bookCover.value = "";
  bookAuthor.value = "";
  bookForm.value.close();
};

// close form if you click outside it
const closeOnBackdrop = (event) => {
  if (event.target === bookForm.value) {
    bookForm.value.close();
  }
};

// to store them locally
watch(
  books,
  (newBooks) => {
    localStorage.setItem("books", JSON.stringify(newBooks));
  },
  { deep: true },
);

//delete book
const delBook = (id) => {
  books.value = books.value.filter((book) => book.id !== id);
};
</script>

<template>
  <main>
    <section class="display-container">
      <h1>Book Tracker</h1>
      <div class="search-bar">
        <input type="text" placeholder="Search for a book..." />
        <span class="search-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="10" cy="10" r="6" />
            <path d="M14.5 14.5L20 20" />
          </svg>
        </span>
      </div>
      <div class="top-wrap">
        <h2>My Books</h2>
        <button class="add" @click="openForm">+</button>
      </div>

      <div class="book-list">
        <div class="book" v-for="book in books" :key="book.id">
          <div class="cover-container">
            <img :src="book.cover" alt="Book Cover" />
          </div>
          <div class="info-wrapper">
            <div class="title" :title="book.title">{{ book.title }}</div>
            <div class="author" :title="book.author">{{ book.author }}</div>
            <button
              class="delete"
              @click="delBook(book.id)"
              aria-label="Delete book"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18" />
                <path d="M8 6V4h8v2" />
                <path d="M19 6l-1 14H6L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
  <dialog ref="bookForm" @click="closeOnBackdrop">
    <h3>Add a Book</h3>
    <form @submit.prevent="saveBook">
      <label
        >Book Title
        <!-- reactive storage variables that get automatically updated by v-model -->
        <input
          v-model="bookTitle"
          type="text"
          placeholder="Enter book title..."
      /></label>
      <label
        >Cover Image URL
        <input
          v-model="bookCover"
          type="url"
          placeholder="Paste the cover image link..."
        />
      </label>
      <label
        >Author Name
        <input
          v-model="bookAuthor"
          type="text"
          placeholder="Enter the author's name..."
        />
      </label>
      <div class="formBtns">
        <button class="btn" type="submit">Save book</button>
        <button class="btn" type="button" @click="bookForm.close()">
          Cancel
        </button>
      </div>
    </form>
  </dialog>
</template>
