SELECT orders.OrderId, orders.OrderDate, customers.CustomerName
FROM orders
join customers on orders.customerId = customers.customerId;

SELECT o.orderID
  , c.CustomerName
  , e.FirstName as SoldBy 
  , s.ShipperName as DeliveryCompany
  , o.OrderDate
FROM Orders as o
JOIN Customers as c ON o.CustomerID = c.CustomerID
JOIN Employees as e ON o.EmployeeID = e.EmployeeID
JOIN Shippers as s ON o.ShipperID = s.ShipperID
ORDER BY c.CustomerName;

-- view order id, date, the name of the product, quantiy, price, line total
select o.orderid, o.orderdate, p.productname, od.quantity, p.price, round((p.price * od.quantity), 2) as 'Total' 
from orders as o
join orderdetails as od on od.orderid = o.orderid
join products as p on p.productid = od.productid;

-- a list of all customers, even if they don't have orders
select * 
from customers as c 
left join orders as o 
	on c.customerId = o.customerId
where o.orderId is null;