def loop():
    calc()
def calc():
    a = input('Enter the expression: ')
    if a != "" and a != " ":
        try:
            print('Answer: ' , eval(a))
        except:
            print('Error!')
            print('Please neatly enter the expression to be solved.')
        loop()
    else:
        print('Error!')
        print('Please neatly enter the expression to be solved.')
        loop()
calc()