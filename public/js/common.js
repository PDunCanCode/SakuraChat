$("#postTextArea").keyup((event) => {
  let textbox = $(event.target);
  let value = textbox.val().trim();
  let submitButton = $("#submitPostButton");

  if (submitButton.length == 0) return alert("No submit Button found");
  if (value == "") {
    submitButton.prop("disabled", true);
    return;
  }
  submitButton.prop("disabled", false);
});
$("#submitPostButton").click(() => {
  let button = $(event.target);
  let textbox = $("#postTextArea");
  let data = {
    content: textbox.val(),
  };
  $.post("/api/posts", data, (postData) => {
    let html = createPostHtml(postData);
    $(".postsContainer").prepend(html);
    textbox.val("");
    button.prop("disabled", true);
  });
});
function createPostHtml(postData) {
  return postData.content;
}
