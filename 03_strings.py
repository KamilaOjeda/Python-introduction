### Strings ###

my_string = "My String"
my_other_string = "My other String"

print(len(my_string))
print(len(my_other_string))

print(my_string + " " + my_other_string)

my_new_line_string = "Este es un String\ncon salto de linea"
print(my_new_line_string)

# Formateo

name, surname, age = "Kamila", "Gabriela", 29

print("Mi nombre es {} {} y mi edad es {}".format(name, surname, age))
print("Mi nombre es %s %s y mi edad es %d" %(name, surname, age)) # %s para String (str), %d para números (int), %f para decimales (float)

print(f"Mi nombre es {name} {surname} y mi edad es {age}".format(name, surname, age)) # inferencia de interpolación de datos, la más recomendada

# Desempaquetado de caracteres

language = "kamila"
a, b, c, d, e, f = language

print(a, c)
print(c)

# División

language_slice = language[1:]
print(language_slice)

# Reverse

reversed_language = language[::-1]
print(reversed_language)

# Funciones del sistema

print(language.capitalize()) # Kamila
print(language.upper()) # KAMILA
print(language.count("a")) # 2
print(language.isnumeric()) # False
print("1".isnumeric()) # True
print(language.lower()) # kamila
print(language.upper().isupper()) # True
print(language.startswith("k")) # True
print(language.startswith("K")) # False





