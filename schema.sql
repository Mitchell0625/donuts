-- Donut Table
-- CREATE TABLE donuts (
-- id SERIAL PRIMARY KEY,
-- users_id INTEGER REFERENCES users (id),
-- kind VARCHAR(50),
-- image TEXT
-- );

-- Box Table
-- CREATE TABLE box (
--     id SERIAL PRIMARY KEY,
--     userid INT REFERENCES users(id)
-- )

-- User Table
-- CREATE TABLE users (
--     id INT SERIAL PRIMARY KEY,
--     authid VARCHAR(200),
--     name VARCHAR(80)
-- )
--Dotop Table
-- CREATE TABLE dotop(
--     donut_id INT REFERENCES donuts(id),
--     topping_id INT REFERENCES toppings(id)
-- );

-- Boxdo Table 
-- CREATE TABLE boxdo(
--     box_id INT REFERENCES box(id),
--     don_id INT REFERENCES donuts(id)
--   );


-- DUMMY DATA FOR DONUT TABLE 
-- INSERT INTO donuts (kind, peanuts, strawberries, sprinkles, chocdrizzle)
-- VALUES('cake', 1,1,1,1);

-- INSERT INTO donuts (kind, topping1, topping2, topping3, price, users_id)
-- VALUES ('Cake', 'strawberries', 'sprinkles', 'glaze', 2, 1);

-- INSERT INTO users (authid, name)
-- VALUES ('mitche16@miamioh.edu', 'Alexx');

-- CREATE TABLE toppings (
--     id SERIAL PRIMARY KEY,
--     price NUMERIC(10,2),
--     label TEXT,
--     category VARCHAR(80)
-- ) 

-- INSERT INTO toppings (category, label, price)
-- VALUES
-- ('nuts','peanuts', 0.25),
-- ('nuts','pecans', 0.25),
-- ('savory','bacon', 0.5),
-- ('savory','gold flakes', 1),
-- ('fruit','strawberries', 0.25),
-- ('fruit','bananas', 0.25),
-- ('sweet','sprinkles', 0),
-- ('frosting','chocolate', 0.25),
-- ('frosting', 'caramel', 0.25),
-- ('frosting', 'raspberry', 0.25),
-- ('drizzle','chocolate', 0),
-- ('drizzle','peanut butter', 0);



-- INSERT INTO donuts (users_id, boxid, kind, price, quantity)
-- VALUES (2, 1, 'cake', 1, 1);




--New Donuts insert
-- INSERT INTO donuts (users_id, kind)
-- VALUES (2,'Chocolate'),(2,'Chocolate'),(2,'Chocolate'), (2, 'Cake'),(1,'Cruller')(1,'Cruller'),(2,'Old-Fashioned');

-- INSERT INTO dotop (donut_id, topping_id)
-- VALUES (1, 2),
-- (1,6);


-- INSERT INTO dotop (donut_id, topping_id)
-- VALUES 
-- (1, 2),
-- (1,6)
-- (2,4),
-- (2,3),
-- (3,5),
-- (3,2),
-- (3,8),
-- (4,5),
-- (4,9),
-- (5,10),
-- (6,7),
-- (6,10),
-- (7,12),
-- (7,4);
-- INSERT INTO box (userid)
-- VALUES(1);

