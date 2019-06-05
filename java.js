// JavaScript Document
$(document).ready(function() {
	
	$("#teste").change(function() {
		var nome = $("#teste option:selected").val();
		alert(nome);
	});
});