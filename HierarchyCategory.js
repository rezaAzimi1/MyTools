<div id="example">
    <div class="demo-section k-content">
        <input id="dropdowntree" style="width: 100%;" />
    </div>
    <script>
        $(document).ready(function () {

            var Category = [
                { id: "1", title: "root", parentid: null },
                { id: "2", title: "food", parentid: "1" },
                { id: "3", title: "car", parentid: "1" },
                { id: "4", title: "apple", parentid: "2" },
                { id: "5", title: "orange", parentid: "2" },
                { id: "6", title: "fesh", parentid: "2" },
                { id: "7", title: "BMW", parentid: "3" },
                { id: "8", title: "GMC", parentid: "3" },
            ]

            class HierarchyCategory {
                text;
                items;
                value;
            }
            function GetTree(id, num) {
                var ArrayOfChild = new Array()
                var ChildTemp = Category.filter(element => element.parentid == id)
                ChildTemp.forEach(element => {
                    //console.log(num+":"+element.title)
                    var node = new HierarchyCategory()
                    node.text = element.title
                    node.items = GetTree(element.id, num + 1)
                    node.value = element.id
                    ArrayOfChild.push(node)
                });
                return ArrayOfChild
            }

            console.log(JSON.stringify(GetTree(null, 1)))
            // create kendoDropDownTree from input HTML element
            $("#dropdowntree").kendoDropDownTree({
                placeholder: "Select ...",
                height: "auto",
                dataSource: GetTree(null, 1)
            });
            var dropdowntree = $("#dropdowntree").data("kendoDropDownTree");
            dropdowntree.value("1");
            
        });
    </script>
</div>

