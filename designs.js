function makeGrid(){
    let table = $("#pixelCanvas");
    let cols = $("#inputWeight").val();
    let rows = $("#inputHeight").val();
    const colorPicker = $("#colorPicker");

    table.children().remove();

    for (let x = 0; x < rows; x++) {
        table.append("<tr></tr>");

    for (let y = 0; y < cols; y++)
    table.children().last().append("<td></td>");
       
    }
    table.on("click", "td",function() {
        let color = 
        $("input[type='color']#colorPicker").val();
        $(this).attr("bgcolor", color);
    });

}const submitButton = $("Input[type='submit']");
submitButton.click(function(event) {
    event.preventDefault();
    makeGrid();
});