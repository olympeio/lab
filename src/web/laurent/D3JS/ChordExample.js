import { VisualBrick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class ChordExample extends VisualBrick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array<*>} properties
     * @return {Element}
     */
    render($, properties) {
        // Write your code here. You have to implement this method !
        // This method returns the rendered element that is attached to its parent with the overridable method `updateParent()`.
        // Executed only once by default, override `setupExecution()` to change the behavior and control the `properties` parameter.
   
        //this gives the scale of the image (and not the size)...
        const width = 1000;    
        const height = width;
        const data = Object.assign([
            [.096899, .008859, .000554, .004430, .025471, .024363, .005537, .025471],
            [.001107, .018272, .000000, .004983, .011074, .010520, .002215, .004983],
            [.000554, .002769, .002215, .002215, .003876, .008306, .000554, .003322],
            [.000554, .001107, .000554, .012182, .011628, .006645, .004983, .010520],
            [.002215, .004430, .000000, .002769, .104097, .012182, .004983, .028239],
            [.011628, .026024, .000000, .013843, .087486, .168328, .017165, .055925],
            [.000554, .004983, .000000, .003322, .004430, .008859, .017719, .004430],
            [.002215, .007198, .000000, .003322, .016611, .014950, .001107, .054264]
          ], {
            names: ["Apple", "HTC", "Huawei", "LG", "Nokia", "Samsung", "Sony", "Other"],
            colors: ["#c4c4c4", "#69b40f", "#ec1d25", "#c8125c", "#008fc8", "#10218b", "#134b24", "#737373"]
          });

        // if no names defined above then define automatically
        const names = data.names === undefined ? d3.range(data.length) : data.names;
        //if no color defined above then define automatically
        const colors = data.colors === undefined ? d3.quantize(d3.interpolateRainbow, names.length) : data.colors;

        //computes the outer radius of the circle
        const outerRadius = Math.min(width, height) * 0.5 - 60;
        //and the inner radius
        const innerRadius = outerRadius - 30;

        //???
        const tickStep = d3.tickStep(0, d3.sum(data.flat()), 100);
        const formatValue = d3.format(".1~%");

        //probably defining the "axe" around the circle
        //call example: ticks({startAngle:0,endAngle:3,value:1});
        function ticks({startAngle, endAngle, value}) {
            //console.log(startAngle, endAngle, value);
            const k = (endAngle - startAngle) / value;
            return d3.range(0, value, tickStep).map(value => {
                var builtObject  = {value, angle: value * k + startAngle};
                //console.log(builtObject);
                return builtObject;
            });
          };
          
        

        //create the chart
        const chord = d3.chord()
            .padAngle(10 / innerRadius)
            .sortSubgroups(d3.descending)
            .sortChords(d3.descending);
        
        const chords = chord(data);

        //this d3 function generates the ring around the chart
        const arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        //this d3 function creates the complex shapes in the circle
        const ribbon = d3.ribbon()
            .radius(innerRadius - 1)
            .padAngle(1 / innerRadius);

        const color = d3.scaleOrdinal(names, colors);
        



        const svg = d3.create("svg")
            .attr("viewBox", [-width / 2, -height / 2, width, height]);

 

        //create one group to contain everything exept the nice round shapes forming the chart
        // and have variable "group" assigned to the group containg one brand
        const group = svg.append("g")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            //create a group for each 'chord.groups' i.e. each brand
            .selectAll("g")
            .data(chords.groups)
            .join("g");

        //append the arc around the chart
        group.append("path")
            .attr("fill", d => color(names[d.index]))
            //function 'arc' returns the coords of the path (attribute d)
            .attr("d", arc);

        
        group.append("title")
            .text((d) => {
                return `${names[d.index]}
                ${formatValue(d.value)}`;
            });
        //the group containing the tick information for this group
        const groupTick = group.append("g")
            //create one group per tick
            .selectAll("g")
            .data(ticks)
            .join("g")
            .attr("transform", d => `rotate(${d.angle * 180 / Math.PI - 90}) translate(${outerRadius},0)`);

        //  the small line on every tick around the circle
        groupTick.append("line")
            .attr("stroke", "currentColor")
            .attr("x2", 6);

        //the value in % around the circle
        groupTick.append("text")
            .attr("x", 8)
            .attr("dy", "0.35em")
            .attr("transform", d => d.angle > Math.PI ? "rotate(180) translate(-16)" : null)
            .attr("text-anchor", d => d.angle > Math.PI ? "end" : null)
            .text(d => formatValue(d.value));

        console.log(formatValue, formatValue(1));

        //name of the brands
        group.select("text")
            .attr("font-weight", "bold")
            .text(function(d) {
                return this.getAttribute("text-anchor") === "end"
                    ? `↑ ${names[d.index]}`
                    : `${names[d.index]} ↓`;
            });

        //the nice round shapes forming the graph
        svg.append("g")
            .attr("fill-opacity", 0.8)
            //for each chord
            .selectAll("path")
            .data(chords)
            .join("path")
            .style("mix-blend-mode", "multiply")
            .attr("fill", (dataItem,index,listOfPaths) => {
                //console.log('d', dataItem);
                //console.log(rank);
                return color(names[dataItem.source.index])
            })
            .attr("d", ribbon)
            .append("title")
            .text(d => `${formatValue(d.source.value)} ${names[d.target.index]} → ${names[d.source.index]}${d.source.index === d.target.index ? "" : `\n${formatValue(d.target.value)} ${names[d.source.index]} → ${names[d.target.index]}`}`);

        return svg.node();
  
    }
}

registerBrick('0183b404f47d278b5c9e', ChordExample);
