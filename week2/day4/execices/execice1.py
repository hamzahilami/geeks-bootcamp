import psycopg2

DB_NAME = "restaurant"
USER = "postgres"
PASSWORD = "2002"
HOST = "localhost"
PORT = "5432"

try:
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT
    )

    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS Menu_Items (
            item_id SERIAL PRIMARY KEY,
            item_name VARCHAR(30) NOT NULL,
            item_price SMALLINT DEFAULT 0
        );
    """)
    conn.commit()

    cur.execute("""
        INSERT INTO Menu_Items (item_name, item_price)
        VALUES (%s, %s)
        RETURNING item_id;
    """, ("Burger", 8))
    item_id = cur.fetchone()[0]
    conn.commit()

    cur.execute("SELECT * FROM Menu_Items;")
    rows = cur.fetchall()
    for row in rows:
        print(row)

    cur.close()
    conn.close()

except Exception as e:
    print("An error occurred:", e)