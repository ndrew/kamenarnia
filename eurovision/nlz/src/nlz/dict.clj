(ns nlz.dict
  "namespace for static dictionaries, etc.")

; use for mapping country to ISO 3166-1 alpha-2 country codes, see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for details

(defonce COUNTRIES
  {
    "Albania" "al"
    "Andorra" "ad"
    "Armenia"  "am"
    "Australia" "au"
    "Austria"  "at"
    "Azerbaijan" "az"
    "Belarus" "by"
    "Belgium" "be"
    "Bosnia and Herzegovina" "ba"
    "Bulgaria" "bg"
    "Croatia" "hr"
    "Cyprus" "cy"
    "Czech Republic" "cz"
    "Denmark" "dk"
    "Estonia" "ee"
    "Finland" "fi"
    "France" "fr"
    "FYR Macedonia" "mk"
    "Georgia" "ge"
    "Germany" "de"
    "Greece" "gr"
    "Hungary" "hu"
    "Iceland" "is"
    "Ireland" "ie"
    "Israel" "il"
    "Italy" "it"
    "Latvia" "lv"
    "Lebanon" "lb"
    "Lithuania" "lt"
    "Malta" "mt"
    "Moldova" "md"
    "Monaco" "mc"
    "Montenegro" "me"
    "Netherlands" "nl"
    "Norway" "no"
    "Poland" "pl"
    "Portugal" "pt"
    "Romania" "ro"
    "Russia" "ru"
    "San Marino" "sm"
    "Serbia and Montenegro" "cs"
    "Serbia" "rs"
    "Slovakia" "sk"
    "Slovenia" "si"
    "Spain" "es"
    "Sweden" "se"
    "Switzerland" "ch"
    "Turkey" "tr"
    "Ukraine" "ua"
    "United Kingdom" "gb"

    "..." "other" ;; TODO:
    })


