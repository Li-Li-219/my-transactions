
# Transcations-assignment
## Introduction

I use react,react-router, and redux to finish this assignment.

* First, In the store of redux, I have two types of data, first is the original transactions data, second is the selected-filters array.

* Then I transform my selected-filters array into an object, the key is the filter type, and the value is an array stored all selected filters in the corresponding filter type. I do this because for different filter types, it uses "and" logic; for different filters in the same type, it uses "or" logic.

* After that, I filter the data and render result in the page.

* Finally, I use redux-router-dom to implement the jump function from main page to transaction details page.

## To Start On Your Machine
```
cd my-transactions
npm install
npm start
```
