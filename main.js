function findTransitiveClosure() {
    var relation = document.getElementById("relation").value;
    var output = document.getElementById("output");
    output.innerHTML = "The transitive closure of the relation " + relation + " is: " + calculateTransitiveClosure(relation);
}

function calculateTransitiveClosure(relation) {
    // Insert your transitive closure calculation code here
    return relation;
}
