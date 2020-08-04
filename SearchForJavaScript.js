<input class="form-control" onkeyup="ReplaceListContent(this)" id="myInput" type="text" placeholder="Search..">
<div style="position: absolute;z-index: 1 "></div>
<script>
    var selectedElm
    function ReplaceListContent_SelectText(elm) {
        selectedElm.value = elm.innerText.split(":")[0]
        selectedElm.nextElementSibling.innerHTML = ""
    }
    function ReplaceListContent(elm) {
        selectedElm = elm
        elm.addEventListener('blur', function () {
            setTimeout(() => { elm.nextElementSibling.innerHTML = "" }, 300)
        })

        var width = elm.getBoundingClientRect().width
        if (elm.value != "") {
            $.ajax({
                url: "./Filter/",
                type: "GET",
                data: { patern: elm.value },
                success: (res) => {
                    //console.log(res)
                    var temp = ``
                    res.forEach(element => {
                        temp += `<li class="list-group-item" style="width:${width}px" onclick="ReplaceListContent_SelectText(this)">${element.code}:${element.name}</li>`
                    })

                    elm.nextElementSibling.innerHTML = temp
                }
            })
        } else elm.nextElementSibling.innerHTML = ""
    }

</script>
