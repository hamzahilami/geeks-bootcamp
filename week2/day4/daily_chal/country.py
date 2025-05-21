import requests
import json
import  sqlite3
import random

connection = sqlite3.connect('countries.db')
cursor=connection.cursor()
def create_table():
    query ='''create table if not exists countries (
                country_id serial primary key,
                name varchar(100),
                capital varchar(100),
                flag varchar(255) ,
                subregion varchar(100),
                population int
            )'''
    cursor.execute(query)
   

def save_countries():
    data = requests.get("https://restcountries.com/v3.1/all")
    data=data.json()
    countries = random.sample(data, 10)
    for country in countries:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", ["Unknown"])[0]
        flag = country.get("flags", {}).get("png", "")
        subregion = country.get("subregion", "Unknown")
        population = country.get("population", 0)
        cursor.execute('''
            insert into countries (name, capital, flag, subregion, population)
            values (?, ?, ?, ?, ?)
        ''', (name, capital, flag, subregion, population))
    connection.commit()
def get_countries():
    query='''select name, capital, flag, subregion, population from countries'''
    cursor.execute(query)
    rows=cursor.fetchall()
    for row in rows:
        name, capital, flag, subregion, population = row
        print(f"Name: {name}")
        print(f"Capital: {capital}")
        print(f"Flag: {flag}")
        print(f"Subregion: {subregion}")
        print(f"Population: {population}")
    
if __name__ == "__main__":
    create_table()
    save_countries()
    get_countries()
    connection.close()