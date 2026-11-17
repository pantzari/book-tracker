<script setup></script>

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
        <button class="add">+</button>
      </div>

      <div class="book-list">
        <div class="book">
          <div class="cover-container">
            <img src="https://via.placeholder.com/100x150" alt="Book Cover" />
          </div>
          <div class="info-wrapper">
            <div class="title">Book Title</div>
            <div class="author">Author Name</div>
          </div>
        </div>
        <div class="book">
          <div class="cover-container">
            <img src="https://via.placeholder.com/100x150" alt="Book Cover" />
          </div>
          <div class="info-wrapper">
            <div class="title">Book Title</div>
            <div class="author">Author Name</div>
          </div>
        </div>
        <div class="book">
          <div class="cover-container">
            <img src="https://via.placeholder.com/100x150" alt="Book Cover" />
          </div>
          <div class="info-wrapper">
            <div class="title">Book Title</div>
            <div class="author">Author Name</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
