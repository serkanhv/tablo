/**
 * Created by Администратор on 09.08.2016.
 */


$("#kartik-modal").on('hidden.bs.modal',function(){
    window.location.replace("index")
});
$("#barcode-modal").on('hidden.bs.modal',function(){
    window.location.replace("price")
});
$("#sell-modal").on('hidden.bs.modal',function(){
    window.location.replace("index")

});




$("#sell-modal-mobile").on('hidden.bs.modal',function(){
    window.location.replace("index2")

});
$("#sverka-modal").on('hidden.bs.modal',function(){
    window.location.replace("index")

});
/*
$("#client_dialog_move").click(function(){
    $("#sell-modal").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});*/
$("#sverka_dialog").click(function(){
    $("#sverka-modal").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});
$("#client").click(function(){
    $("#object-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});

$("#contractor").change(function(){

   
        $.get('select', {id: $('#contractor').val()}, function () {
         
        });
   
});

function editDiscount2() {

   
        $.get('update-all-discount', {discount: $('#discount22').val()}, function () {
			$.pjax.reload({container:"#grid-arrival"});
        });
   
};
$("#selectKassa").change(function(){

        $.get('select', {id: $('#selectKassa').val()}, function (data) {
				$("#sum").html(data);
        });
   
});
function deleteArrival(id)
{
    $.get('delete2', {id:id},function(){
        window.location.replace("index");
    });
}
function deleteArrival2(id)
{
    $.get('delete2', {id:id},function(){
        window.location.replace("index2");
    });
}
function receivedHistory()
{
if (confirm("Начать сохранение?"))

        window.location.replace("received-history");
    

}
function ajaxFileUpload()
{
    if (confirm("Məlumatları yeniləmək istədiyinizə əminsiz?"))
    {
        $.get('import-xls', {},function(html){
            alert(html);
        });

        return false;
    }
}
function showPrice(price,id)
{
		$("#"+id).html(price);
		$("#show_"+id).css("visibility","hidden");
		$("#hid_"+id).css("visibility","visible")
}
function hidePrice(price,id)
{
		$("#"+id).html("");
		$("#show_"+id).css("visibility","visible");
		$("#hid_"+id).css("visibility","hidden")
}

function photo(id)
{
	    $("#client-modal").modal("show")
        .find("#clientContent")
        .load("photo?id="+id);
	
	
}
function gener()
{
    var bar='';
    for (var i = 1; i <= 5; i++)
        bar+=''+Math.floor(Math.random() * (8));

    $("#barcodep-name-0").val(bar);
}
function addTypeProduct() {
    if ($('#type5').val()) id=$('#type5').val();
    else  if ($('#type4').val()) id=$('#type4').val();
    else  if ($('#type3').val()) id=$('#type3').val();
    else  if ($('#type2').val()) id=$('#type2').val();
    else  if ($('#type1').val()) id=$('#type1').val();
    else id=0;
    $("#type-create").modal("show")
        .find("#modalContent")
        .load("create-type?id="+id);



}
function editSum(id,sum)
{
    $.get('update-sum', {id:id,sum:sum},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}

function editDiscount(id,discount)
{
    $.get('update-discount', {id:id,discount:discount},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}

function toggle(source)
{

checkboxes=document.getElementsByName('select[]');
    for (var i= 0,n=checkboxes.length;i<n;i++)
    {
        checkboxes[i].checked=source.checked;

    }

}

function addProduct() {
    if ($('#type5').val()) id=$('#type5').val();
    else  if ($('#type4').val()) id=$('#type4').val();
    else  if ($('#type3').val()) id=$('#type3').val();
    else  if ($('#type2').val()) id=$('#type2').val();
    else  if ($('#type1').val()) id=$('#type1').val();


    $("#type-create").modal("show")
        .find("#modalContent")
        .load("create-product?id="+id);


};
function editTypeProduct() {
    $("#type-create").modal("show")
        .find("#modalContent")
        .load("update?type1="+$('#type1').val()+"&type2="+$('#type2').val()+"&type3="+$('#type3').val()+"&type4="+$('#type4').val()+"&type5="+$('#type5').val()+"&product="+$('#product').val());

};
function changeSession(id)
{
	
	 $.get('select', {id:id},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });
}
function infoClient(id){
   //window.open("info-client?number="+number,"_blank");
  /*  $("#info").modal("show")
        .find("#modalContent")
        .load("info-client?number="+number);
*/
    window.open("../move/client?id="+id,"_blank");

}

function infoContr(id){
 
    window.open("../move/contr?id="+id,"_blank");

}
$("#typeBalance").click(function(){
    $("#type-balance-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});

function typeOperation(type){
   $.get('type-balance', {type:type},function(data){
        $("#id_type").html(data);
    });
}
$("#product").click(function(){
    $("#product-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});

$("#postponed_dialog").click(function(){
    //window.open("postponed");
    window.location.replace("postponed");
});
$("#zakaz_dialog").click(function(){
    //window.open("postponed");
    window.location.replace("zakaz");
});
$("#store").click(function(){
    $("#store-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});

$("#contractor").click(function(){
    $("#contractor-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});
$("#client").click(function(){

    $("#client-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});

$("#users").click(function(){
    $("#users-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});
$("#master").click(function(){
    $("#master-create").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));

});
$("#modalButton").click(function(){
    $("#kartik-modal").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});
$("#modalButton3").click(function(){
     window.location.replace($("#modalButton3").attr("value"));
});
$("#modalButton2").click(function(){
    $("#barcode-modal").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});
$("#sell_dialog").click(function(){
    $("#sell-modal").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});
$("#sell_dialog2").click(function(){
    $("#sell-modal").modal("show")
        .find("#modalContent")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});
$("#sell_dialog_mobile").click(function(){
	   window.location.replace($("#sell_dialog_mobile").attr("value"));
   
});
$("#addDclient").click(function(){
    $("#modal").modal("show")
        .find("#modalDclient")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});
$("#dclient").click(function(){
    location.href=$(this).attr("value");
});
$("#rest").click(function(){
    window.open($(this).attr("value"),"_blank");
});

$("#return").click(function(){
    window.location.replace($(this).attr("value"));
});
$("#client_dialog").click(function(){
    $("#client-modal").modal("show")
        .find("#clientContent1")
        .load($(this).attr("value"));
    //$('w0-container').focus();
});



function editStore(id){
    $.get('update-store', {id:id},function(){
        window.location.replace("index")
    });

};


function vozvratSelect(number){

    $("#postponed-modal").modal("show")
        .find("#postponedContent")
        .load("return-show?number="+number);

}
function addSellType2() {
    var names = [];
    var quantity = [];
    $('#select input:checked').each(function () {
        names.push($(this).val());
        quantity.push($("#return_id" + $(this).val()).val());
        //alert($(this).val());
    });
    $.get('insert-type2', {id:names,quantity:quantity},function(){
        window.location.replace("index");
    });

}
function receivedSelectPostponed(){
    var names = []; var quantity=[];var master=[];
    $('#select input:checked').each(function() {
        names.push( $(this).val() );
        quantity.push( $("#return_id"+$(this).val()).val() );
        master.push( $("#master"+$(this).val()).val() );
        //alert($(this).val());
    });

    $.get('postponed-received', {id:names,quantity:quantity,date:$("#date_issue").val(),master:master},function(data){

        if (data==0) alert("Mallardan birindən filialda yoxdur");
        else { alert("Mallar təhvil vərildi");
          //


           // window.open('print-postponed?id='+names,'_blank');
         window.location.replace("postponed");


             }
    });


}


function receivedAdminPostponed(number)
{
    $.get('postponed-received', {number:number},function(data){
        alert("Вы подтвердили");
        window.location.replace("index");
    });

}

function receivedReturn(number)
{
    $.get('return-received', {number:number},function(data){
        alert("Вы подтвердили");
        window.location.replace("index1");
    });

}
function printPostponed(number,receive)
{
    if (receive==1)   $.get('postponed-print', {number:number},function(data){

    });
    window.open('print-postponed?number='+number,'_blank');
    setTimeout(function(){

        window.location.replace("receive");

    },4000);

}
function receivedSelectReturn(){
    var names = []; var quantity=[];
    $('#select input:checked').each(function() {
        names.push( $(this).val() );
        quantity.push( $("#return_id"+$(this).val()).val() );
        //alert($(this).val());
    });

    $.get('return-received', {id:names,quantity:quantity,reason:$("#reason").val(),money:$("#money").val(),store:$("#store").val(),date:$("#date").val()},function(data){

        window.location.replace("../returnp/index");


    });


}

function returnNewSell(){

    $.get('return-received-new', {money:$("#money").val()},function(data){

        window.location.replace("index");


    });

}
function editQuantity(id,quantity,i)
{
	
    $.get('update-quantity', {id:id,quantity:quantity},function(){
        $.pjax.reload({container:"#grid-arrival",data:{'name':'price','id':i}, replace: false});
		
    });

}


function editPrice(id,price,i)
{
    $.get('update-price', {id:id,price:price},function(){
        $.pjax.reload({container:"#grid-arrival",data:{'name':'pricesell','id':i}, replace: false});
    });

}
function editSn(id,sn)
{
    $.get('update-sn', {id:id,sn:sn},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}

function editUsd(id,price)
{
    $.get('update-usd', {id:id,price:price},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}


function editPricesellMin(id,price,i)
{
    $.get('update-price-min', {id:id,price:price},function(){
       $.pjax.reload({container:"#grid-arrival",data:{'name':'pack','id':i}, replace: false});
    });

}
function editBoxing(id,price)
{
    $.get('update-boxing', {id:id,price:price},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}
function editProcId(id,proc)
{
    $.get('update-proc', {id:id,proc:proc},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}
function exhangeAznUsd(id)
{
 $.get('update-usd-azn', {id:id},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });
}
function editPricesell(id,price,i)
{
    $.get('update-pricesell', {id:id,price:price},function(){
          $.pjax.reload({container:"#grid-arrival",data:{'name':'trade_price','id':i}, replace: false});
    });

}
function editUsdsell(id,price)
{
    $.get('update-usd-sell', {id:id,price:price},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}


function clickProduct(id,name)
{
    if (confirm("Выбрать товар " + name)) {
        $("#id_product").html(id);
        $("#name_product").html(name);

        $("#sell-modal").modal("hide");
    }
}

function image(group)
{
    window.open('image?group='+group,'_blank');
}
function receivedArrival(store,contractor,date,tmp)
{
    //window.open('mpdf','_blank');
    if (!store) {
        $("#select2-store8-container .select2-selection__placeholder").css('color', 'red');
        $("#select2-store8-container .select2-selection__placeholder").css('font-weight', 'bold');
        return;
    }
    if (!contractor) {
        $("#select2-contractor-container .select2-selection__placeholder").css('color', 'red');
        $("#select2-contractor-container .select2-selection__placeholder").css('font-weight', 'bold');
        return;
    }

    flag=0;
    for (var i = 1; i <= $(".myy").length; i++) {
        if ($('#price'+i).val()==0 || parseFloat($('#price'+i).val())>parseFloat($('#pricesell'+i).val())) {$('#price'+i).css('border', '3px outset red'); flag=1;}
        else $('#price'+i).css('border', '1px solid #A9A9A9');

        if ($('#pricesell'+i).val()) $('#pricesell'+i).css('border', '1px solid #A9A9A9');
        else { $('#pricesell'+i).css('border', '3px outset red');flag=1;}

        // alert($('#price').val());

    }
	

    if (flag==0) {
		if (tmp==0)
			{
				$("<iframe>")                             // create a new iframe element
					.hide()                               // make it invisible
					.attr("src", "print?con="+contractor) // point the iframe to the page you want to print
					.appendTo("body"); 
					
						setTimeout(function(){
								$.get('received', {store:store,contractor:contractor,date:date},function(){
								window.location.replace("index");
								});
						
						   },2000);
			}
			else 
				$.get('barcode-insert', {},function(){
						$.get('received', {store:store,contractor:contractor,date:date},function(){
								window.location.replace("../barcode/index");
								});		
					});
		}

}
function postponedArrivalSelect(number) {
    $.get('postponed-select', {number:number},function(){
        window.location.replace("index");
    });
}

function postponedSelect(number){

    $("#postponed-modal").modal("show")
        .find("#postponedContent")
        .load("postponed-show?number="+number);

}
function postponedArrival(store,contractor)
{


    $.get('postponed-arrival', {store:store,contractor:contractor},function(){
        window.location.replace("index");
    });

}
function postponedArrival2(store,contractor)
{


    $.get('postponed-arrival', {store:store,contractor:contractor},function(){
        window.location.replace("index2");
    });

}
function addSellBarcode(barcode){
    if (barcode){
			
    $.get('check-barcode', {barcode:barcode},function(data){
	if (data==1) 	{
		 $("#login-modal").modal("show")
        .find("#loginContent")
	.load("barcode-show?barcode="+barcode);	}
	else 	 
		   $.get('insert-barcode', {barcode:barcode},function(){
			$.pjax.reload({container:"#grid-arrival"});
			//$.pjax.reload({container:"#grid-arrival"});
			$("#barcode").val("");
			$("#barcode").focus();
			});
    })
 
	}
}
function addSellBarcodeMobile(barcode){
    if (barcode){
			
    $.get('check-barcode', {barcode:barcode},function(data){
	if (data==1) 	{
		 $("#login-modal").modal("show")
        .find("#loginContent")
	.load("barcode-show?barcode="+barcode);	}
	else 	 
		   $.get('insert-barcode', {barcode:barcode},function(){
			$.pjax.reload({container:"#grid-arrival"});
			//$.pjax.reload({container:"#grid-arrival"});
			$("#barcode").val("");
			$("#barcode").focus();
			
			
			});
    })
 
	}
}
function addSellId(id)
{
	
  $.get('insert', {id:id,quantity:1},function(){
	   $("#login-modal").modal("hide");
        $.pjax.reload({container:"#grid-arrival"});
        //$.pjax.reload({container:"#grid-arrival"});
        $("#barcode").val("");
        $("#barcode").focus();
    });	
	
}
function addArrival(id,name)
{
	var quantity=prompt("Neçə ədəd   "+name+" ?",1);
    if (quantity) {
				$.get('insert', {id:id,quantity:quantity},function(){
			   
				 });
         }
	
}
function addTransfer(id) {
    var quantity=prompt("Сколько  ?",1);
    if (quantity) {
        $.get('insert', {id:id,quantity:quantity},function(){
            // $.pjax.reload({container:"#grid-arrival"});
        });
    }
}
function addTransfer2(id) {
    var quantity=prompt("Сколько  ?",1);
    if (quantity) {
        $.get('insert-price', {id:id,quantity:quantity},function(){
            // $.pjax.reload({container:"#grid-arrival"});
        });
    }
}
function addSellType(id){

        $.get('insert-type', {id:id},function(){
           window.location.replace("index");
        });
    //

}

function addArrivalType(id)
{
    $.get('insert-type', {id:id},function(){
        window.location.replace("index");
    });
}
function reportSell(type1,type2,type3,product)
{



}


function findProduct(product) {

    $("#dclient-modal").modal("show")
        .find("#dclientContent")
        .load("rest?id="+product);



};

function quantityProduct(product) {

    $("#dclient-modal").modal("show")
        .find("#dclientContent")
        .load("select-product?id="+product);



};
function addSell(id,rest)
{
	var flag=0;
	$.get('check-zakaz', {}, function (date) {
				flag = date;
				if (date==1) { alert("Сначала продайте новый заказ"); return;}
				else 
				
				{
				
					if (rest>0) {
						 var quantity=prompt("Сколько ?",1);
						 if (quantity) {
						 $.get('insert', {id:id,quantity:quantity},function(){
						// $.pjax.reload({container:"#grid-arrival"});
						 });
						 }
						//alert("sd");
					}
				
					else if(confirm("Товар отсутсвует на складе. Продолжить?") )
					{
						var quantity=prompt("Сколько  ?",1);
						if (quantity) {
							$.get('insert', {id:id,quantity:quantity},function(){
								$.pjax.reload({container:"#grid-arrival"});
							});
						}
					}
				}
	});


}



function addSverka(id) {

        var quantity = prompt("Сколько  ?", 1);
        if (quantity) {
            $.get('insert', {id: id, quantity: quantity}, function () {
                 //$.pjax.reload({container:"#grid-arrival"});
            });
        }

}


function addSverkaBarcode(barcode){
    if (barcode){
        $.get('insert-barcode', {barcode:barcode},function(){
            window.location.replace("index");

        });}
}
function deleteAll()
{
if (confirm("Ləğv etmək istədiyinizdəb əminsiniz?")){	
    $.get('delete-all', {},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });
}
}
function passwordLogin()
{
	   $("#kartik-modal").modal("show")
        .find("#modalContent")
        .load('../password/login');
	
	
}
function passwordView()
{
	 $.get('../password/check-password', {password:$('#password').val()},function(data){
		
        if (data==1) window.location.replace("../password/index");
		else alert('Неправильный пароль');
    });
	  
	
	
}
function deleteAllPrice()
{
    $.get('delete-all-price', {},function(){
        $.pjax.reload({container:"#grid-arrival"});
    });

}
function deleteAllTransfer()
{
	 if(confirm("Silmək istədiyinizdən?")) {
		$.get('delete-all', {},function(){
			window.location.replace("index");
			});
	 }

}
function deleteAllTransferMobile()
{
	 if(confirm("Silmək istədiyinizdən?")) {
		$.get('delete-all', {},function(){
			window.location.replace("index2");
			});
	 }

}

function selectClient(id)
{
    if(confirm("Выбрать текущего клиента?")) {
        $.get('select', {id: id}, function () {
            window.location.replace("index");
            //$.pjax.reload({container: "#grid-arrival"});
        });
    }
}
function selectClientMobile(id)
{
    if(confirm("Выбрать текущего клиента?")) {
        $.get('select', {id: id}, function () {
            window.location.replace("index2");
            //$.pjax.reload({container: "#grid-arrival"});
        });
    }
}

function selectClientMove(id)
{
    if(confirm("Выбрать текущего клиента?")) {
       // $.get('select', {id: id}, function () {
            window.location.replace("client?id="+id);
            //$.pjax.reload({container: "#grid-arrival"});
       // });
    }
}
function receivedDB(){
   //
    alert("dfdf");
}
/*function cancel(number){
  //  if(confirm("Ləğv ətmək istədiynizdən əmin sinizmi?")) {
        $.get('cancel', {number: number}, function () {
            window.location.replace("index");
            //$.pjax.reload({container: "#grid-arrival"});
        });

   // }
}
*/

function cancel(number){
  //  if(confirm("Ləğv ətmək istədiynizdən əmin sinizmi?")) {
        $.get('cancel', {number: number}, function () {
            window.location.replace("index");
            //$.pjax.reload({container: "#grid-arrival"});
        });

   // }
}
function cancelReturn(number){
 
        $.get('cancel', {number: number}, function () {
            window.location.replace("../sell/index");
           
        });

}
function cancelPos(number){
  //  if(confirm("Ləğv ətmək istədiynizdən əmin sinizmi?")) {
        $.get('cancel-pos', {number: number}, function () {
            window.location.replace("index");
            //$.pjax.reload({container: "#grid-arrival"});
        });

   // }
}
function cancelPosMobile(number){
  //  if(confirm("Ləğv ətmək istədiynizdən əmin sinizmi?")) {
        $.get('cancel-pos', {number: number}, function () {
            window.location.replace("index2");
            //$.pjax.reload({container: "#grid-arrival"});
        });

   // }
}
function cancelArrrival(number){
  //  if(confirm("Ləğv ətmək istədiynizdən əmin sinizmi?")) {
        $.get('cancel', {number: number}, function () {
            window.location.replace("index");
            //$.pjax.reload({container: "#grid-arrival"});
        });

   // }
}

function cancelTransfer (number){
  //  if(confirm("Ləğv ətmək istədiynizdən əmin sinizmi?")) {
        $.get('cancel', {number: number}, function () {
           window.location.replace("index");
            //$.pjax.reload({container: "#grid-arrival"});
        });

   // }
}
function findProduct()
{
	if (window.location.href.indexOf("?")!=-1)
	window.location.replace(window.location.href + "&barcode="+$("#barcode").val());
else window.location.replace(window.location.href + "?barcode="+$("#barcode").val());
	
}

function zakazReceived(money,date,rate,store,user,flag,discount,kassa)
{
	
$.get('check-zakaz', {}, function (date) {
	if (date==1)
			{
				$.get('delete-zakaz', {}, function (date) {});
			}
		$.get('zakaz-received', {money: money,postponed:0,date:date,rate:rate,store:store,user:user,discount:discount,kassa:kassa}, function () {
												window.location.replace("index")
											});
	});
}
function zakazOk(id)
{
		
		$.get('zakaz-ok', {id:id}, function () {
						window.location.replace("zakaz")
											
			});

}

function deleteZakazAll(number)
{
		
		$.get('zakaz-delete-all', {number:number}, function () {
						window.location.replace("zakaz")
											
			});

}
function receivedSell(money,date,rate,store,user,flag,discount,kassa) {
	
 if (rate==-1) {
        $("#rate").css('background-color', 'red');
        $("#rate").css('font-weight', 'bold');
        return;
    }
if (flag) {	
	if (!money) {
			$("#money").css('background-color', 'red');
			$("#money").css('font-weight', 'bold');
			return;
		}}
	$.get('check', {}, function (date) {
			var flag;
			flag=date;	
		
			if (flag==1)  {
				$.get('check-rest', {store:store}, function (date) {
					flag=date;	
		
					if (flag==0)  {
						 
							/*$("<iframe>")                             // create a new iframe element
							.hide()                               // make it invisible
							.attr("src", "print?money="+money+"&discount="+discount) // point the iframe to the page you want to print
							.appendTo("body"); 
								*/
							    window.open("print?money="+money+"&discount="+discount,'_blank');
							setTimeout(function(){
												$.get('received', {money: money,postponed:0,date:date,rate:rate,store:store,user:user,discount:discount,kassa:kassa}, function () {
												window.location.replace("index")
											});
								
									},4000);
					}
					else alert("Bu maldan <"+ date+ "> anbarda yoxdur və ya azdır");
				});
			}
			else alert("Цена продажи меньше минимума");
		});
		
	
					
}
function addProduct(neww)
{
	if (neww){
	  $.ajax({
        url:     'create-check', //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
       
        data: $("form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
		if (response==1) {
					if (!confirm("Bu barkod artıq mövcuddur,davam edək?")) {return;}
				}
				
					$.ajax({
					url:     'create', //url страницы (action_ajax_form.php)
					type:     "POST", //метод отправки
					dataType: "html", //формат данных
					data: $("form").serialize(),  // Сеарилизуем объект
					success: function(response) { //Данные отправлены успешно
							window.location.replace("index")
					},
					
				});
    	},
    	
 	});
	
	
	
	
	}

	
	
}
function receivedSell2(money,date,rate,store,user,discount) {

 

    // window.open('mpdf?money=' + money+'&date='+date+'&issue='+$("#date_issue").val()+'&user='+$("#id_user").val(), '_blank');
    //  setTimeout(function(){

    $.get('received', {money: money,postponed:1,date:date,rate:rate,store:store,user:user,discount:discount,kassa:0}, function () {
        window.location.replace("index")
    });
    //   },4000);


}
function receivedSellMobile(money,date,rate,store,user) {

 

    // window.open('mpdf?money=' + money+'&date='+date+'&issue='+$("#date_issue").val()+'&user='+$("#id_user").val(), '_blank');
    //  setTimeout(function(){

    $.get('received', {money: money,postponed:1,date:date,rate:rate,store:store,user:user}, function () {
        window.location.replace("index2")
    });
    //   },4000);


}
function  printChek(number) {
    window.open('print2?number=' + number, '_blank');

}
function tableShow(type1,type2,type3,type4,type5,product){
    $.get('table', {type1:type1,type2:type2,type3:type3,type4:type4,type5:type5,product:product},function(data){
       // $("#myTable").html(data);
    });
}
function barcodeReceived() {

   window.open('print','_blank');

    $.get('delete-all', {},function(){
        //   $.pjax.reload({container:"#grid-arrival"});
    });

}

function barcodeReceived2() {

    window.open('print2','_blank');
  /*  setTimeout(function(){

    $.get('delete-all', {},function(){
           $.pjax.reload({container:"#grid-arrival"});
    });

    },4000);*/
   

}

function barcodeReceived3() {

    window.open('print-new','_blank');   

}
function priceReceived() {

    window.open('print-price','_blank');
  setTimeout(function(){

     //  $.get('delete-all', {},function(){
        //   $.pjax.reload({container:"#grid-arrival"});
   // });

    },4000);
   

}

function printTransfer(number)
{
 $("<iframe>")                             // create a new iframe element
        .hide()                               // make it invisible
        .attr("src", "print?number="+number) // point the iframe to the page you want to print
        .appendTo("body");  	
 
	
}

function printProduct(id)
{
 $("<iframe>")                             // create a new iframe element
        .hide()                               // make it invisible
        .attr("src", "print?id="+id) // point the iframe to the page you want to print
        .appendTo("body");  	
 
	
}

function editPriceTop(id,price)
{
    $.get('update-price-top', {id:id,price:price},function(){
        setTimeout(function () {

            $("#pack"+id).focus();
        },300);
    });

}

function editPolka(id,polka)
{
    $.get('update-polka', {id:id,polka:polka},function(){
        $.pjax.reload({container:"#grid-arrival"});
        setTimeout(function () {

            $("#price_top"+id).focus();
        },300);
    });

}
function editPacka(id,price,i)
{
    $.get('update-pack', {id:id,price:price},function(){
        $.pjax.reload({container:"#grid-arrival"});
				 $.pjax.reload({container:"#grid-arrival",data:{'name':'price_top','id':i}, replace: false});
    });

}
function editPriceAr(price)
{
    //pricesell=price* $("#proc").val()/100;
    $.get('get-procent-edit', {price: $("#price").val(),pricesell: $("#pricesell").val()},function(date){

        $("#proc").val(date);

    });

}

function editProcent(procent,price)
{
    //pricesell=price* $("#proc").val()/100;
    $.get('procent-edit', {procent: procent,price: price},function(date){

        $("#pricesell").val(date);
		editPack();

    });

}
function returnSell(id)
{
    $("#select").modal("show");
    $("#id").val(id);
}

function returnSellReceived()
{
	 $.get('../password/check-password', {password:$('#password').val()},function(data){
	
        if (data==1) {
			  $("<iframe>")                             // create a new iframe element
					.hide()                               // make it invisible
					.attr("src", "print-return") // point the iframe to the page you want to print
					.appendTo("body"); 
			 setTimeout(function () {
				$.get('return-sell-received', {sum:$("#money").val(),store:$("#store2").val(),user:$("#user").val()}, function () {
					window.location.replace("index");
				});
             
			},300);	
			 
			
		}
		else alert('Şifrə səhvdir');
    });
	
	
}
function sverkaReceived(){

if (confirm("Təsdiqləmək istədiyinizdən əminsiniz?")){
    $.get('received', {}, function () {
        window.location.replace("index");
    });
}	
}
/*function returnSellReceived(quantity,reason,id,client)
{


     $.get('received-return', {id: id,quantity:quantity,reason:reason,client:client}, function () {
     //   $.pjax.reload({container:"#grid-arrival"});
         $("#select").modal("hide");
     });

}*/
function receivedTransfer(whence,where,post)
{

	if (!whence) 
	{
		
		$("#select2-whence-container .select2-selection__placeholder").css('color', 'red');
        $("#select2-whence-container .select2-selection__placeholder").css('font-weight', 'bold');
		
		return;
	}
	
	if (!where) 
	{
		
		$("#select2-where-container .select2-selection__placeholder").css('color', 'red');
        $("#select2-where-container .select2-selection__placeholder").css('font-weight', 'bold');
		
		return;
	}
	
	
	$.get('check-rest', {whence:whence}, function (date) {
					flag=date;	
		
					if (date==0) {

							 $.get('received', {whence:whence,where:where}, function (data) {
			
									if (post==1)
										 $.get('received-posponed', {number:data}, function (data) {
												
									});
											window.location.replace("index");
			
									});
					}
					else
					 alert("Bu maldan <"+ date+ "> anbarda yoxdur və ya azdır");
				});
	
				
						
					
		
    

}

function returnArrivalPassword()
{
		
    if (!$("#store8").val()) {
        $("#select2-store8-container .select2-selection__placeholder").css('color', 'red');
        $("#select2-store8-container .select2-selection__placeholder").css('font-weight', 'bold');
        return;
    }
    if (!$("#contractor").val()) {
        $("#select2-contractor-container .select2-selection__placeholder").css('color', 'red');
        $("#select2-contractor-container .select2-selection__placeholder").css('font-weight', 'bold');
        return;
    }
	   $("#login-modal").modal("show")
        .find("#loginContent")
        .load('login');
	
	
}

function returnSellPassword()
{
		
   
	   $("#login-modal").modal("show")
        .find("#loginContent")
        .load('login');
	
	
}
function returnArrival()
{

   
	 $.get('../password/check-password', {password:$('#password').val()},function(data){
		
        if (data==1) 
		{
			 $.get('received-return', {store:$("#store8").val(),contractor:$("#contractor").val(),date:$("#date").val()}, function () {
					
					  setTimeout(function () {
						  
						  window.location.replace("index");
								},300);	
					
					
           
				})
		}
		else alert('Неправильный пароль');
    });
       
    

}

function returnArrival2(number)
{
	
    if (confirm('Вернуть приходную накладную?'))
    {
        $.get('received-return2',{number:number} ,function () {
            window.location.replace("index");
            // alert("sdsd");
        })
    }

}
function debtReceived(id){
 if (!$("#kassa"+id).val()) {
        $("#select2-kassa"+id+"-container .select2-selection__placeholder").css('background-color', 'red');
        $("#select2-kassa"+id+"-container .select2-selection__placeholder"+id).css('font-weight', 'bold');
        return;
    }
	
	
    $.get('received-debt', {id:id,sum:$("#sum"+id).val(),note:$("#note"+id).val(),kassa:$("#kassa"+id).val()},function(){
        window.location.replace("index");
    });
}


function debtReceivedClient(id){
if ($("#sum"+id).val()!=0)
{
	 if (!$("#kassa"+id).val()) {
        $("#select2-kassa"+id+"-container .select2-selection__placeholder").css('background-color', 'red');
        $("#select2-kassa"+id+"-container .select2-selection__placeholder"+id).css('font-weight', 'bold');
        return;
    }
$('#print').attr('disabled', true)	
	 $("<iframe>")                             // create a new iframe element
        .hide()                               // make it invisible
        .attr("src", "print-payment?id="+id+"&sum="+$("#sum"+id).val()) // point the iframe to the page you want to print
        .appendTo("body"); 
		
  setTimeout(function () {

              $.get('received-debt', {id:id,sum:$("#sum"+id).val(),note:$("#note"+id).val(),date:$("#date"+id).val(),kassa:$("#kassa"+id).val()},function(){
				window.location.replace("dialog");
		});
        },300);		
 
}	
	

  
}
function editExchange(rate) {
    $.get('exchange', {rate:rate},function(){
        window.location.replace("index")
    });
}
function editUsdAzn(usd)
{
    $.get('usd-azn', {usd:usd},function(data){
       $("#price").val(data);
    });

}
function editTradePrice(id,price,i)
{
    $.get('trade-price', {id:id,price:price},function(data){
		 $.pjax.reload({container:"#grid-arrival",data:{'name':'pricesell_min','id':i}, replace: false});
    });

}
function infoDebt(id)
{
    $("#info").modal("show")
        .find("#modalContent")
       .load($("#"+id).attr("value"));
      //  .load($("#"+$id).attr("value"));
    //alert($("#"+$id).attr("value"));
}
//"debt/info?number="+$number

function infoSell(id)
{
    $("#sell-info").modal("show")
        .find("#modalContent1")
        .load($("#"+id).attr("value"));

}


function editPolka(id,polka)
{
    $.get('update-polka', {id:id,polka:polka},function(){
        $.pjax.reload({container:"#grid-arrival"});
        setTimeout(function () {

            $("#price_top"+id).focus();
        },300);
    });

}
function editPack()
{

        $.get('get-pachka-price', {pricesell:   $("#pricesell").val(),pack:$("#pack").val()},function(date){

            $("#price_top").val(date);

        });

}

function selectProduct(id)
{
    $.get('type4', {id:id},function(data){
        $("#div6").show();
        $("#product").html(data);
    });
}


function greenClick(greenCount,num)
{
    greenCount= greenCount+num;
    $.get('change-green-count',{greenCount:greenCount} ,function (date) {    
        $.pjax.reload({container:"#pjaxGreen"});
      
    })

   
    
}
function changePlayer()
{
    $.get('change-player',{player1:$("#player1").val(),player2:$("#player2").val()} ,function () {    
        $.pjax.reload({container:"#pjaxTablo"});
    })
 
}
function redClick(redCount,num)
{
    redCount= redCount+num;
    $.get('change-red-count',{redCount:redCount} ,function () {    
        $.pjax.reload({container:"#pjaxRed"});
    })

   
    
}
function changeWeight()
{
    $.get('change-weight',{weight:$("#weight").val()} ,function () {    
     
    })
}
function changeLevel()
{
    $.get('change-level',{level:$("#level").val()} ,function () {    
     
    })
}
function changeRound()
{
    $.get('change-round',{round:$("#round").val()} ,function () {    
     
    })
}
function clickReset()
{
    $.get('reset-session',{} ,function () {    
        window.location.replace("tablo");
    }) 
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    my_set_interval_id = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer =0;
            clearInterval(my_set_interval_id);
        }
    }, 1000);
}


function clickStart()
{
    button = document.querySelector('#but');
    
    if ( button.textContent == 'START') {
    var time = $("#second").val();
    display = document.querySelector('#time');
    if (display.textContent.substr(0,2))
    {
        var minutes = display.textContent.substr(0,2);
        var seconds = display.textContent.substr(3,4);
        var fiveMinutes = 60 * Math.floor(minutes) +  Math.floor (seconds);
     
    }
    else 
    var fiveMinutes = 60 * Math.floor(time) + (time - Math.floor (time))*100;
    
    
    startTimer(fiveMinutes, display);
   
    button.textContent = 'PAUSE';
    }
    else  
    {
        clearInterval(my_set_interval_id);
        button.textContent = 'START';
    }

}

function clickWait()
{
    button = document.querySelector('#wait');
    display = document.querySelector('#time');
    if ( button.textContent == 'FASİLƏ')
    {
        var time = $("#second").val();
        display.textContent =  "00:30";
        button.textContent = 'FASİLƏNİ BİTİR';
        startTimer(30, display);
    }
    else 
    {
        clearInterval(my_set_interval_id);
        display.textContent =  "";
        button.textContent = 'FASİLƏ';
    }
        
      

 
}

