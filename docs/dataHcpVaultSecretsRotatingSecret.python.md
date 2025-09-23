# `dataHcpVaultSecretsRotatingSecret` Submodule <a name="`dataHcpVaultSecretsRotatingSecret` Submodule" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultSecretsRotatingSecret <a name="DataHcpVaultSecretsRotatingSecret" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_vault_secrets_rotating_secret

dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  secret_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.appName">app_name</a></code> | <code>str</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.secretName">secret_name</a></code> | <code>str</code> | The name of the Vault Secrets secret. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.appName"></a>

- *Type:* str

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_rotating_secret#app_name DataHcpVaultSecretsRotatingSecret#app_name}

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.Initializer.parameter.secretName"></a>

- *Type:* str

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_rotating_secret#secret_name DataHcpVaultSecretsRotatingSecret#secret_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataHcpVaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_vault_secrets_rotating_secret

dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_vault_secrets_rotating_secret

dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_vault_secrets_rotating_secret

dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_vault_secrets_rotating_secret

dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataHcpVaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataHcpVaultSecretsRotatingSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataHcpVaultSecretsRotatingSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultSecretsRotatingSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretProvider">secret_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretValues">secret_values</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretVersion">secret_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.appNameInput">app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret_provider`<sup>Required</sup> <a name="secret_provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretProvider"></a>

```python
secret_provider: str
```

- *Type:* str

---

##### `secret_values`<sup>Required</sup> <a name="secret_values" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretValues"></a>

```python
secret_values: StringMap
```

- *Type:* cdktf.StringMap

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretVersion"></a>

```python
secret_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_name_input`<sup>Optional</sup> <a name="app_name_input" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.appNameInput"></a>

```python
app_name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultSecretsRotatingSecretConfig <a name="DataHcpVaultSecretsRotatingSecretConfig" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import data_hcp_vault_secrets_rotating_secret

dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_name: str,
  secret_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.appName">app_name</a></code> | <code>str</code> | The name of the Vault Secrets application. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.secretName">secret_name</a></code> | <code>str</code> | The name of the Vault Secrets secret. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.appName"></a>

```python
app_name: str
```

- *Type:* str

The name of the Vault Secrets application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_rotating_secret#app_name DataHcpVaultSecretsRotatingSecret#app_name}

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-hcp.dataHcpVaultSecretsRotatingSecret.DataHcpVaultSecretsRotatingSecretConfig.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

The name of the Vault Secrets secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_secrets_rotating_secret#secret_name DataHcpVaultSecretsRotatingSecret#secret_name}

---



