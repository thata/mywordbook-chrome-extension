function highlight(element, word) {
  var nodeList = element.childNodes;

  // ノードリストだとハイライト処理によって作成された要素に対してもハイライト処理が走ってしまうため、一度ただの配列に変換しておく
  var nodes = [];
  for (var i = 0; i < nodeList.length; i++) {
    nodes.push(nodeList[i]);
  }

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.nodeType == 1) {
      highlight(node, word);
    } else if (node.nodeType == 3) {
      var text = node.data;
      if (new RegExp(word).test(text)) {
        var newText = text.split(word).join("<span class=\"highlight\">" + word + "</span>");
        jQuery(node).replaceWith(newText);
      }
    }
  }
}

var body = document.getElementsByTagName("body")[0];
highlight(body, "Tool");
highlight(body, "Ruby");
highlight(body, "Vim");

