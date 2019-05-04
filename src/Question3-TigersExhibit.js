/*
 * ============= Question 3 =============
 *
 * The TigersExhibit component below receives 2 props:
 * - population which is a number
 * - habitats which is an array
 *
 * Part A: Replace the dots (...) in the paragraph (<p>) element below with the
 * population prop.
 *
 * Part B: Replace the comment in the unordered list (<ul>) element below with a
 * list element (<li>) element for every habitat in the habitats prop
 *
 * HINT: you can transform an array using the .map method
 */

import React from "react";

function TigersExhibit() {
  return (
    <div className="tigers">
      <h2>Tigers</h2>
      <p>There are ... tigers in the world</p>
      <ul>{/* DELETE THIS LINE AND WRITE THE ANSWER PART B HERE */}</ul>
    </div>
  );
}

export default TigersExhibit;