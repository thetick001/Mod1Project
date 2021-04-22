$(document).ready(function () {
    $("#happy").hide();
    $("#part1").hide();
    $("#submit").hide();
    $("#toP2").hide();
    $("#part2").hide();
    $("button#start").on("click", showmenu);
    $("button#submit").on("click", calculate);
    $("button#submit").on("click", lastp);
    $("button#submit").on("click", hidepizza);
    $("button#submit").on("click", showhappy);
    $("button#toP2").on("click", nextbut);
    $("#fee").hide();
});

function hidepizza()
{
    $("#pizza").hide();
}

function showhappy()
{
    $("#happy").show();
}

function showmenu()
{
    $("#part1").show();
    $("#start").hide();
    $("#toP2").show();
}

function nextbut()
{
    $("#toP2").hide();
    $("#part2").show();
    $("#submit").show();
    $("#part1").hide();
}

function lastp()
{
    $("#submit").hide();
    $("#part2").hide();
}

function calculate() {
    $("#fee").show()
    let small = 7;
    let medium = 9;
    let large = 12;
    let payNum = 0;
    let sizep = 0;

    let size = $("input[name=size]:checked").data("size");

    if (size === "Small")
        { sizep = 7 }
    else if (size = "Medium")
        { sizep = 9}
    else if (size === "Large")
        { sizep = 12 }
    payNum += sizep;

    let crust = $("input[name=crust]:checked").data("crust");

    let checkedMeatBoxes = $("input[name=meat]:checked")

    let meatCost = 1.50 * checkedMeatBoxes.length;
    payNum += meatCost

    if (checkedMeatBoxes.length === 0)
    { checkedMeatBoxes = "no meat" }

    let meatTop = "";
    checkedMeatBoxes.each(function (){
        meatTop += $(this).data("meat") + " ";
    })

    let checkedVegBoxes = $("input[name=veggie]:checked")

    let vegCost = 1 * checkedVegBoxes.length;
    payNum += vegCost;

    if (checkedVegBoxes.length === 0)
    { checkedVegBoxes = "no vegetables"}

    let veggieTop = "";
    checkedVegBoxes.each(function (){
        veggieTop += $(this).data("veggie") + " ";
    })

    let subtotal = parseFloat(payNum)
    let tax = payNum * .051;
    let fee = 2;
    let total = parseFloat(fee + tax + subtotal);


    let fname = $("#fname").val();

    let lname = $("#lname").val();

    let addy = $("#addy").val();

    let phoneN = $("#phoneN").val();


    $("p#order").text(`You ordered: ${size} ${crust} style pizza, with ${meatTop} ${veggieTop}`);
    $("p#pinfo").text(`Order made out to ${fname} ${lname}, at ${addy}. If we have any issues we will contact you at ${phoneN}!`);
    $("p#tax").text(`Tax: +$${tax.toFixed(2)}`)
    $("p#subtotal").text(`Subtotal: $${subtotal.toFixed(2)}`);
    $("p#total").text(`Total: $${total.toFixed(2)}`)

}