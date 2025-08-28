1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElentById = use for get single div or element ,
getelemtByClass = its use for get single or more element, ist also arry like html collection
querySElector: qureySeletor userfor get first and sigle Elemetn and it defint like css Clsss,or id like(.name or #id)  name ,its also array like element 
querySelectorAll :querySelecorAll use for get all element and its arry like html collaction



2.How do you create and insert a new element into the DOM?
<div id ="unq"></div>
const divcontiner = getElementById("unq").innertext
newElement = document.creatElement("div")
newElement.InnerHtml =`<h1>helow</h1>`
NewElement = divcontiner.append(newElemnt)

3.What is Event Bubbling and how does it work?
event bubbling is workin when event fier and its work child node to upper node

4.What is Event Delegation in JavaScript? Why is it useful?
when fier the event then onley single and wher cleck or other even fire .its wortk only hear



5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefaut().use for browser reffersh its use for from input valu Get , stopPropragation use for hendel bubbling 