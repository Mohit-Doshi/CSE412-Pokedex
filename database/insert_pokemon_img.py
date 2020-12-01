### insert_pokemon_img.py ###
# Reads pokemon images and names from the folder 'images' #
# Creates a list of 'INSERT' statements to be executed in pgAdmin

import base64
import os

final_stmt = ""
stmt = "INSERT INTO pokemonimages (pokemonname, img_base64encoded) VALUES ("


directory = r'C:\Users\conno\Documents\Classes 2020\CSE412\GroupProject\images'     # Change if running on a different machine!

for filename in os.listdir(directory):
    # only look at files that are images
    if filename.endswith(".jpg") or filename.endswith(".png"):

        # read the image
        with open(os.path.join(directory, filename), "rb") as image_file:

            #encode the image as a b64 string
            encoded_img_bytes = base64.b64encode(image_file.read())
            stringRepresentation = encoded_img_bytes.decode('ascii')

            #cut off the '.png' extension to get the name
            x = filename.index(".")
            name = filename[0:x]

            final_stmt += stmt + "'" + name + "', " + "'" + stringRepresentation + "');\n"
               
    else:
        continue

#write the output to a file
output_file = open("image_queries.txt", "w")
output_file.write(final_stmt)
output_file.close()