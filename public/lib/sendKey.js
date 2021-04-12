/**
 * Sends the specified key to the server and presses it if the password is correct
 * @param {string} keyCode PyAutoGui key code to send
 * @param {string} auth Host password
 */
function sendKey(keyCode, auth) {
    postData("/post/keyboard", {
        passwd: auth,
        value: keyCode
    })
}