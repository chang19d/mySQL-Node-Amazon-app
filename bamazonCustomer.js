var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "8769341a",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
    

    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        
        var choiceArray = [];
        for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].item_id);
        }
        console.log("--------------------ITEMS FOR SALE--------------------")
        for(var i = 0; i < results.length; i++){
            console.log("|item ID: " + results[i].item_id + " | name: " + results[i].product_name
            + " | department: " + results[i].department_name + " | price: " + results[i].price + 
            " | stock quantity: " + results[i].stock_quantity + " |");
        }
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: ["1","2","3","4","5","6","7","8","9","10"],
                message: "Choose the ID of the product you wish to purchase."
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }
         ])
         .then(function(answer){
            var choice = parseInt(answer.choice) -1;
            var itemID = choice + 1;
            var quantity = parseInt(answer.quantity);
            if(results[choice].stock_quantity < quantity){
                console.log("Sorry! There is not enough left in stock for this order.");
                start();
            }else{
                var updatedQuantity = results[choice].stock_quantity - quantity;
                var totalCost = results[choice].price * quantity;
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: updatedQuantity
                      },
                      {
                        item_id: itemID
                      }
                    ],
                    function(error) {
                      if (error) throw err;
                      console.log("------------------------------------------------------");
                      console.log("Purchase Successful! Your total cost is: $" + totalCost);
                      console.log("------------------------------------------------------");
                      start();
                    }
                );
            }
        });
    });
}