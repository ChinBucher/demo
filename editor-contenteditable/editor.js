		$ = function(id){ return document.getElementById(id);};
		window.onload = function(){ 
			//进入编辑器 默认为可编辑
			$("editer").setAttribute("contenteditable",true);

			//字号 改变
			$("size").onchange = function(){ 
				var size = parseInt($("size").value);
				$("editer").focus();
				//设置选中字体的大小
				document.execCommand("FontSize",false,size);
			}

			//颜色 改变
			$("color").onchange = function(){ 
				var color = $("color").value;
				$("editer").focus();
				//设置选中字体的大小
				document.execCommand("ForeColor",false,color);
			}

			//加粗 改变
			$("bold").onchange = function(){ 
				$("editer").focus();
				//设置选中字体的大小
				document.execCommand("Bold");
			}

			//斜体 改变
			$("italic").onchange = function(){ 
				$("editer").focus();
				//设置选中字体的大小
				document.execCommand("Italic");
			}

			//下划线 改变
			$("underline").onchange = function(){ 
				$("editer").focus();
				//设置选中字体的大小
				document.execCommand("Underline");
			}

			//button event
			$("submmit").onclick = function(){ 
				$("editer").className = "display";
				$("editer").setAttribute("contenteditable",false);
				$("submmit").style.display = "none";
				$("edit").style.display = "block";
			}

			$("edit").onclick = function(){ 
				$("editer").className = "edittable";
				$("editer").setAttribute("contenteditable",true);
				$("edit").style.display = "none";
				$("submmit").style.display = "block";
			}
		}