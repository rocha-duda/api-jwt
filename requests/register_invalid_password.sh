echo "=== TESTE: Registrar com SENHA INVÁLIDA (menos de 8 caracteres) ==="
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Usuario Teste", "email": "novo@email.com", "password": "123"}'
echo ""