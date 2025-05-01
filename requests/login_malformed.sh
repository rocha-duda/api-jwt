echo "=== TESTE: Login com REQUISIÇÃO MAL FORMATADA (faltando 'password') ==="
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "existente@email.com"}'
echo ""