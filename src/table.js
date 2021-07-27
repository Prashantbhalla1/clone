import './table.css'
const Table=()=>{

    return (

<table className="table">

<tr className="odd" >

<th>
Package
</th>
<th>
Basic Package
$15
</th>
<th>
Standard Package
$25
</th>
<th>
Premium Package
$50
</th>

</tr>
<tr>


<td>
Concept
</td>
<td>1</td>
<td>2</td>
<td>3</td>

</tr>

<tr  className="odd" >
<td>Print-Ready</td>
<td><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>
<td><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>
<td><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>

</tr>
<tr>
<td>Double-Sided</td>
<td className="tff"><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>
<td><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>
<td><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>
</tr>
<tr  className="odd" >
    <td>Source File</td>
    <td><p><i class="fa fa-times tick-col theme_color_txt" aria-hidden="true"></i></p></td>
    <td><i class="fa fa-times tick-col theme_color_txt" aria-hidden="true"></i></td>
    <td><i class="fa fa-check tick-col theme_color_txt" aria-hidden="true"></i></td>
</tr>

<tr>
<th>Total</th>
<td><h5>$15</h5>
<button className="btn" >Select</button>
</td>
<td><h5>$25</h5>
<button className="btn" >Select</button>
</td><td><h5>$50</h5>
<button className="btn" >Select</button>
</td>
</tr>


</table>

    )
}
export default Table;