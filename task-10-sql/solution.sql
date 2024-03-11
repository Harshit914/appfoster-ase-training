-- Write a sql command 

--1. To insert values in customers table.
Insert into Customers(customer_id, first_name, last_name, age, country) values (1, 'John', 'Doe', 31, 'USA'); 

--2. To insert multiple values in customers table. 
Insert into Customers(customer_id, first_name, last_name, age, country) values 
(1, 'John', 'Doe', 31, 'USA'),
(2, 'Robert', 'Luna', 22, 'USA'),
(3, 'David', 'Robinson', 22, 'UK');

--3. To get number of customers per country. 
Select count(customer_id), country from Customers group by country;

--4. To get the orders who have amount between 100 to 500.
Select * from Orders where amount between 100 and 500;

--5. To get the first name and last name of customers who have bought Keypad.
Select first_name, last_name from Customers as c, Orders as o where c.customer_id=o.order_id and o.item='Keyboard';

--6. To get the name of the countries where shipping status is Pending.
Select country from Customers as c, Shippings as s where c.customer_id=s.customer and s.status='Pending';

--7. To get the number of orders per customer.
Select first_name, last_name, count(o.customer_id) from Customers as c, orders as o where c.customer_id=o.order_id group by o.customer_id;