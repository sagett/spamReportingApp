from rest_framework import serializers
from .models import Report


class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = (
            'reference_id',
            'status',
            'message',
            'source',
            'report_type',
            'created_at',
            'updated_at')