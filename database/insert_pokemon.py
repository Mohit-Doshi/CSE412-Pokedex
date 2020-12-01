### insert_pokemon.py ###
# Reads pokemon info from the 'pokemon.csv' #
# Creates a list of 'INSERT' statements to be executed in pgAdmin


import csv

final_stmt = ""

with open('pokemon.csv', mode='r') as file:
    csvFile = csv.reader(file)

    # for each row in the csv
    for lines in csvFile:
        #assign pokemon info and stats
        pokedex_id = lines[0]
        name = lines[2]
        type1 = lines[4]
        type2 = lines[5]
        ability1 = lines[6]
        ability2 = lines[7]
        hp = lines[9]
        attack = lines[10]
        defense = lines[11]
        sp_attack = lines[12]
        sp_defense = lines[13]
        speed = lines[14]
        #create the insert statement for this pokemon
        insert_stmt = "INSERT INTO pokemon (pokedexid, pokemonName, isLegendary, generation, type1, type2, attack, defense, hp, speed, sp_attack, sp_defense, ability1, ability2) VALUES (" + pokedex_id + ", " + "'" + name + "', " + "False" + ", " + "1" + ", '" + type1 + "', '" + type2 + "', " + attack + ", " + defense + ", " + hp + ", " + speed + ", " + sp_attack + ", " + sp_defense + ", " + "'" + ability1 + "', '" + ability2 +"');\n"
        final_stmt += insert_stmt

#write the result statement to an output file
output_file = open("pokemon_queries.txt", "w")
output_file.write(final_stmt)
output_file.close()





