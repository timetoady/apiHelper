const testButton = document.querySelector("#test");

//Basic async/await API call that uses a try/catch block and console.errors any errors received.
//Requires endpoint URL, API method (GET, POST, PUT, etc), and a modifier to call the API from different endpoints of the URL.
//Method and modifier default to "GET" and "" (respectively) if unspecified.
//Returns data as JSON.
export async function tryCatch(
  URL,
  method = "GET",
  headers = {},
  modifier = ""
) {
  try {
    const response = await fetch(URL + `${modifier}`, {
      method: method,
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// testButton.addEventListener("click", async () => {
//     console.log("Test fired.")
//     const jikanCoboywBebopAPI = "https://api.jikan.moe/v3/anime/1"
//     const result = await tryCatch(jikanCoboywBebopAPI, "GET", {}, "/episodes")
//     console.log(result.episodes)
// })


//A recursive function that turns flat data you might receive in an API call into a tree of data.
//The first parameter receives the array of objects, the second specifies the parent by which you'll filter the array.
//The third parameter specifies if you want to log the resulting tree to console, and defaults to `true` if omitted.
export function makeTree(array, parent, logIt = true) {
  let tree = {};
  let theFilter = array.filter((item) => item.parent == parent);
  theFilter.forEach((item) => (tree[item.id] = makeTree(array, item.id)));
  if (logIt) {
    console.log(JSON.stringify(tree));
  }
  return tree;
}

testButton.addEventListener("click", () => {
    let initalTodos = [
        { id: 1, todo: "Buy milk.", complete: false, category: "Grocery" },
        { id: 2, todo: "Clean the cat box.", complete: false, category: "House" },
        { id: 3, todo: "Chips and salsa.", complete: false, category: "Grocery" },
        { id: 4, todo: "Finish Homework for DGM 3760", complete: false, category: "School"},
      ];

      let data = [
        { id: 'animals', parent: null },
        { id: 'mammals', parent: 'animals' },
        { id: 'cats', parent: 'mammals' },
        { id: 'dogs', parent: 'mammals' },
        { id: 'labrador', parent: 'dogs' },
        { id: 'retreiver', parent: 'dogs' },
        { id: 'corgi', parent: 'dogs' },
        { id: 'persian', parent: 'cats' },
        { id: 'siamese', parent: 'cats' },
        { id: 'maineCoon', parent: 'cats' }
    ];
    
      makeTree(initalTodos, "House")
})

//This recursive function drills into received nested object you might get when working with APIs to find matching key passed and return it's value.
//The first parameter specifies the object to be search, the second the key that you're looking for the value of.
//The third parameter specifies if you want to log the resulting value to console, and defaults to `true` if omitted.
export function getObject(theObject, key, logIt = true) {
  var result = null;
  if (theObject instanceof Array) {
    for (var i = 0; i < theObject.length; i++) {
      result = getObject(theObject[i], key);
      if (result) {
        break;
      }
    }
  } else {
    for (var prop in theObject) {
      console.log(prop + ": " + theObject[prop]);
      console.log(prop, key);
      if (prop == key) {
        return theObject[prop];
      }
      if (
        theObject[prop] instanceof Object ||
        theObject[prop] instanceof Array
      ) {
        result = getObject(theObject[prop], key);
        if (result) {
          break;
        }
      }
    }
  }
  if (logIt) {
    console.log(result);
  }
  return result;
}

//Build JSON from received HTML form via FormData for POSTing to an API.
//The first parameter is for the form object, the second if you want the result print to the console (defaults to true if omitted).
export const buildJsonFormData = (form, logIt = true) => {
  const jsonFormData = {};
  for (const pair of new FormData(form)) {
    jsonFormData[pair[0]] = pair[1];
  }
  if (logIt) {
    console.log(jsonFormData);
  }
  return jsonFormData;
};
