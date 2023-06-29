# `provider`

Refer to the Terraform Registory for docs: [`hcp`](https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-hcp.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HcpProvider <a name="HcpProvider" id="@cdktf/provider-hcp.provider.HcpProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs hcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import provider

provider.HcpProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  client_id: str = None,
  client_secret: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The OAuth2 Client ID for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth2 Client Secret for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The default project in which resources should be created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#alias HcpProvider#alias}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.clientId"></a>

- *Type:* str

The OAuth2 Client ID for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#client_id HcpProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

The OAuth2 Client Secret for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#client_secret HcpProvider#client_secret}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.provider.HcpProvider.Initializer.parameter.projectId"></a>

- *Type:* str

The default project in which resources should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#project_id HcpProvider#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.provider.HcpProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.provider.HcpProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.provider.HcpProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.provider.HcpProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.provider.HcpProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.provider.HcpProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-hcp.provider.HcpProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-hcp.provider.HcpProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-hcp.provider.HcpProvider.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.provider.HcpProvider.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.provider.HcpProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import provider

provider.HcpProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import provider

provider.HcpProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_hcp import provider

provider.HcpProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.provider.HcpProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.provider.HcpProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.provider.HcpProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.provider.HcpProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.provider.HcpProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-hcp.provider.HcpProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-hcp.provider.HcpProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcp.provider.HcpProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-hcp.provider.HcpProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.provider.HcpProvider.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-hcp.provider.HcpProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.provider.HcpProvider.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.provider.HcpProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HcpProviderConfig <a name="HcpProviderConfig" id="@cdktf/provider-hcp.provider.HcpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.provider.HcpProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import provider

provider.HcpProviderConfig(
  alias: str = None,
  client_id: str = None,
  client_secret: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | The OAuth2 Client ID for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The OAuth2 Client Secret for API operations. |
| <code><a href="#@cdktf/provider-hcp.provider.HcpProviderConfig.property.projectId">project_id</a></code> | <code>str</code> | The default project in which resources should be created. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#alias HcpProvider#alias}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The OAuth2 Client ID for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#client_id HcpProvider#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The OAuth2 Client Secret for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#client_secret HcpProvider#client_secret}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.provider.HcpProviderConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The default project in which resources should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.62.0/docs#project_id HcpProvider#project_id}

---



