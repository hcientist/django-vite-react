from ninja import NinjaAPI

# import requests
from canvasapi import Canvas
from allauth.socialaccount.models import SocialAccount

api = NinjaAPI()


# @api.get("/enrollments")
# def enrollments(request):
#     sa = SocialAccount.objects.filter(user=self.request.user).first()
#     token = sa.socialtoken_set.first()
#     if token is not None:
#         canvas = Canvas("https://canvas.jmu.edu", token.token)
#         courses = canvas.get_courses()
#         return courses
#     canvas = Canvas("https://canvas.jmu.edu", request)
#     # r = requests.get('https://httpbin.org/basic-auth/user/pass', auth=('user', 'pass'))
#     return "Hello world"
