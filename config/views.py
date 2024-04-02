import json

from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.views.generic import TemplateView
from allauth.socialaccount.models import SocialAccount

class HomeView(LoginRequiredMixin, TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        sa = SocialAccount.objects.filter(user=self.request.user).first()
        
        context_data = super().get_context_data(**kwargs)
        data = {"username": self.request.user.username,}
        if sa is not None:
            data["social_account"] = {
                "uid": sa.uid,
                "extra_data": sa.extra_data,
            }
            token = sa.socialtoken_set.first()
            if token is not None:
                data["social_account"]["token"] = token.token
        context_data.update(data)
        return context_data

