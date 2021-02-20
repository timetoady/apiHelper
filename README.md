# REST API Helper module

#### This module is a group of helper methods for working with REST API calls. The methods help you both set up API calls (to GET or POST, for example) and then deal with that data once you've got it. 

## tryCatch method

`tryCatch(URL, method, headers, modifier)`

Usage:
A basic async/await API call that uses a try/catch block and console.errors any errors received. Requires endpoint URL. You can specify headers, an API method (GET, POST, PUT, etc), and also optionally modifier to call the API from different endpoints of the URL. Method and modifier default to `GET` and `""` (respectively) if unspecified, and headers defaults to `{}`. Returns data as JSON.

Example:

```javascript
    //In an async function.
    const jikanCoboywBebopAPI = "https://api.jikan.moe/v3/anime/1/episodes"
    const result = await tryCatch(jikanCoboywBebopAPI, "GET", {}, ".episodes") 
    console.log(result)
```
Result should be:

```json
{
    "request_hash": "request:anime:c8a5be55579a0147b5c455245461fe69a7347e1b",
    "request_cached": true,
    "request_cache_expiry": 64469,
    "episodes_last_page": 1,
    "episodes": [
        {
            "episode_id": 1,
            "title": "Asteroid Blues",
            "title_japanese": "アステロイド・ブルース",
            "title_romanji": "Asteroid Blues ",
            "aired": "1998-10-24T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/1",
            "forum_url": "https://myanimelist.net/forum/?topicid=29264"
        },
        {
            "episode_id": 2,
            "title": "Stray Dog Strut",
            "title_japanese": "野良犬のストラット",
            "title_romanji": "Nora Inu no Strut ",
            "aired": "1998-04-03T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/2",
            "forum_url": "https://myanimelist.net/forum/?topicid=29323"
        },
        {
            "episode_id": 3,
            "title": "Honky Tonk Women",
            "title_japanese": "ホンキィ・トンク・ウィメン",
            "title_romanji": "Honky Tonk Women ",
            "aired": "1998-04-10T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/3",
            "forum_url": "https://myanimelist.net/forum/?topicid=29334"
        },
        {
            "episode_id": 4,
            "title": "Gateway Shuffle",
            "title_japanese": "ゲイトウェイ・シャッフル",
            "title_romanji": "Gateway Shuffle ",
            "aired": "1998-11-14T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/4",
            "forum_url": "https://myanimelist.net/forum/?topicid=50217"
        },
        {
            "episode_id": 5,
            "title": "Ballad of Fallen Angels",
            "title_japanese": "堕天使たちのバラッド",
            "title_romanji": "Datenshi-tachi no Ballad ",
            "aired": "1998-11-21T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": "https://myanimelist.net/anime/1/Cowboy_Bebop/episode/5",
            "forum_url": "https://myanimelist.net/forum/?topicid=22879"
        }
    ]
}
```
etc. Response truncated for length.

## 

## `makeTree` method

## `getObject` method



Usage:
This recursive function drills into received nested object you might get when working with APIs to find matching key passed and return it's value. The first parameter specifies the object to be search, the second the key that you're looking for the value of. The third parameter specifies if you want to log the resulting value to console, and defaults to `true` if omitted.

## buildJsonFormData method

`buildJsonFormData(form, logIt)`

Usage:
This is a method that builds JSON from received a HTML form. This could be used inside JavaScript for control of sending form data instead of via HTML and a submit button, especially if you are collating multiple forms. 
The first parameter is for the form object, the second if you want the result print to the console (defaults to true if omitted).

Example:
```html
<form id="nameForm" action="/" method="POST">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
```
Result should be:
```json

```