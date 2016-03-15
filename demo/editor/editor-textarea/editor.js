		$ = function(id){ return document.getElementById(id);};
		window.onload = function(){ 

			//字号 改变
			$("size").onchange = function(){ 
				var size = parseInt($("size").value);
				$("text").focus();
				//设置选中字体的大小
				document.execCommand("FontSize",false,size);
			}

			//颜色 改变
			$("color").onchange = function(){ 
				var color = $("color").value;
				$("text").focus();
				//设置选中字体的大小
				$("text").style.color= color;
			}

			//加粗 改变
			$("bold").onchange = function(){ 
				$("text").focus();
				//设置选中字体的大小
				var weight = $("text").style.fontWeight;
				console.log(weight);
				console.log(typeof(weight));
				if(weight === "bold"){ 
					$("text").style.fontWeight= "normal";
				}else{ 
					$("text").style.fontWeight= "bold";
				}
			}

			//斜体 改变
			$("italic").onchange = function(){ 
				$("text").focus();
				//设置选中字体的大小
				var it =  $("text").style.fontStyle;
				console.log(it);
				console.log(typeof(it));
				if(it === "italic"){ 
					$("text").style.fontStyle = "normal";
				}else{ 
					$("text").style.fontStyle = "italic";
				}
			}

			//下划线 改变
			$("underline").onchange = function(){ 
				$("text").focus();
				//设置选中字体的大小
				var un =  $("text").style.textDecoration;
				console.log(un);
				console.log(typeof(un));
				if(un === "underline"){ 
					$("text").style.textDecoration = "none";
				}else{ 
					$("text").style.textDecoration = "underline";
				}
			}

			//button event
			$("submmit").onclick = function(){ 
				alert($("text").innerHTML);
				$("submmit").style.display = "none";
				$("edit").style.display = "block";
			}

			$("edit").onclick = function(){ 
				$("edit").style.display = "none";
				$("submmit").style.display = "block";
			}
		}