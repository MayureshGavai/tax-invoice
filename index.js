$(document).ready(function (e) {

   

    // To create new row
    function addProductRow() {
        var newRow = $(`<tr class="invoice-row">`);
        newRow.append(`<td><textarea type = "text" class= "product-desc" placeholder = "Enter item name/description" ></textarea > <input class="hsn-sac" type="text" placeholder="HSN/SAC"> </td>`)
        newRow.append(`<td style="vertical-align:top"><input class="table-number" id="qty" type="number" name="qty" min="0" placeholder="0"></td>`)
        newRow.append(`<td style="vertical-align:top"><input class="table-number rate" type="number" name="rate" min="0" placeholder="0.00"></td>`)
        newRow.append(`<td style="vertical-align:top"><input class="table-number cgst" type="number" name="cgst" min="0" placeholder="0"><input class="table-number readonly" type="number" name="cgst-value" min="0" placeholder="0" readonly></td>`)
        newRow.append(`<td style="vertical-align:top"><input class="table-number cess" type="number" name="cess" min="0" placeholder="0"><input class="table-number readonly" type="number" name="cess-value" min="0" placeholder="0" readonly></td>`)
        newRow.append(`<td style="vertical-align:top"><input class="table-number readonly" type="number" name="amt" min="0" placeholder="0" readonly></td>`)
        newRow.append(`<td style="vertical-align:top"><input class="table-number readonly" type="number" name="amt" min="0" placeholder="0" readonly></td>`)
        newRow.append(`<td><button class="remove-button"><svg class="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="close-lineitem-icon" alt="close"><path d="M256 32c30.3 0 59.6 5.9 87.2 17.6 26.7 11.3 50.6 27.4 71.2 48s36.7 44.5 48 71.2c11.7 27.6 17.6 56.9 17.6 87.2s-5.9 59.6-17.6 87.2c-11.3 26.7-27.4 50.6-48 71.2s-44.5 36.7-71.2 48C315.6 474.1 286.3 480 256 480s-59.6-5.9-87.2-17.6c-26.7-11.3-50.6-27.4-71.2-48s-36.7-44.5-48-71.2C37.9 315.6 32 286.3 32 256s5.9-59.6 17.6-87.2c11.3-26.7 27.4-50.6 48-71.2s44.5-36.7 71.2-48C196.4 37.9 225.7 32 256 32m0-32C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0z" /><path d="M284.3 250.3l62.3-62.3c6.2-6.2 6.2-16.2 0-22.4l-.2-.2c-6.2-6.2-16.2-6.2-22.4 0l-62.3 62.3c-3.1 3.1-8.2 3.1-11.3 0L188 165.4c-6.2-6.2-16.2-6.2-22.4 0l-.2.2c-6.2 6.2-6.2 16.2 0 22.4l62.3 62.3c3.1 3.1 3.1 8.2 0 11.3L165.4 324c-6.2 6.2-6.2 16.2 0 22.4l.2.2c6.2 6.2 16.2 6.2 22.4 0l62.3-62.3c3.1-3.1 8.2-3.1 11.3 0l62.3 62.3c6.2 6.2 16.2 6.2 22.4 0l.2-.2c6.2-6.2 6.2-16.2 0-22.4l-62.3-62.3c-3-3.2-3-8.2.1-11.4z" /></svg></button></td>`)
        $('.invoice-items').append(newRow);
    }

    $('.add-item').on('click', function() {
        addProductRow();
    });

    //To remove product row
    $('.invoice-items').on('click','.remove-button', function(){
        $(this).closest('tr').remove();
    })


});