-- SELECT b.don_id, b.box_id, d.kind, SUM(t.price) FROM boxdo b
-- JOIN donuts d ON d.id = b.don_id
-- JOIN dotop ON d.id = dotop.donut_id
-- JOIN toppings t ON dotop.topping_id = t.id
-- WHERE d.users_id = $1 AND b.box_id=$2;

SELECT b.don_id, d.kind, SUM(t.price) FROM boxdo b
JOIN donuts d ON d.id = b.don_id
JOIN dotop ON d.id = dotop.donut_id
JOIN toppings t ON dotop.topping_id = t.id
WHERE b.box_id=$1
GROUP BY b.don_id, d.kind;