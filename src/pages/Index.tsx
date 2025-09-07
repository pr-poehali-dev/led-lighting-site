import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Lightbulb" className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">LightStore</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Главная</a>
              <a href="#catalog" className="text-gray-700 hover:text-blue-600 font-medium">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">О нас</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональные LED светильники
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Энергоэффективные решения для вашего дома и бизнеса. 
              Качественное освещение с гарантией и профессиональными консультациями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-blue-700 hover:text-blue-800">
                <Icon name="Search" className="h-5 w-5 mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                <Icon name="MessageSquare" className="h-5 w-5 mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Zap" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Энергосбережение</h3>
              <p className="text-gray-600">До 80% экономии электроэнергии по сравнению с обычными лампами</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Официальная гарантия до 5 лет на все светодиодные светильники</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Users" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Профессиональные консультации</h3>
              <p className="text-gray-600">Поможем подобрать оптимальное освещение для любого помещения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные светильники</h2>
            <p className="text-lg text-gray-600">Широкий выбор LED решений для любых задач</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden bg-white">
                <img 
                  src="/img/d1db5097-3f0a-4e3d-a9ac-8a9c41ac2345.jpg" 
                  alt="Потолочный LED светильник"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Потолочный LED светильник</CardTitle>
                <CardDescription>Минималистичный дизайн, регулируемая яркость</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">15 990 ₽</span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Icon name="Star" className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden bg-white">
                <img 
                  src="/img/92537c89-a62e-43fa-8895-4584ace8322d.jpg" 
                  alt="LED трековая система"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">LED трековая система</CardTitle>
                <CardDescription>Направленное освещение, регулируемые споты</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">24 990 ₽</span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Icon name="Star" className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden bg-white">
                <img 
                  src="/img/f8942d0d-4ff0-4691-82cd-1b203a99e59b.jpg" 
                  alt="LED лента"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">LED лента Professional</CardTitle>
                <CardDescription>Гибкое освещение, влагозащита IP65</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">3 490 ₽</span>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Icon name="Star" className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600">4.7</span>
                  </div>
                </div>
                <Button className="w-full">
                  <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Профессиональные консультации по освещению
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Наши эксперты помогут вам подобрать идеальное освещение для любого помещения. 
                Учитываем площадь, назначение комнаты, ваши предпочтения и бюджет.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Расчет освещенности</h3>
                    <p className="text-gray-600">Точный расчет необходимого количества света</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Подбор температуры света</h3>
                    <p className="text-gray-600">Теплый, нейтральный или холодный свет</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Схема размещения</h3>
                    <p className="text-gray-600">Оптимальное расположение светильников</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Получить бесплатную консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и наш специалист свяжется с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваше помещение и задачи освещения" 
                      className="min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                <p className="text-gray-600 mb-1">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-1">info@lightstore.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                <p className="text-gray-600 mb-1">Москва, ул. Светлая, 15</p>
                <p className="text-sm text-gray-500">Пн-Пт с 10:00 до 19:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Lightbulb" className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">LightStore</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>© 2024 LightStore. Все права защищены.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;